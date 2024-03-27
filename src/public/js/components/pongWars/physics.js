import { generateParticles } from './particles.js';
import { colorPalette } from './pongWars.js';

function checkSquareCollision(
  ball,
  SQUARE_SIZE,
  numSquaresX,
  numSquaresY,
  squares,
  particles
) {
  // Check multiple points around the ball's circumference
  for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
    const checkX = ball.x + Math.cos(angle) * (SQUARE_SIZE / 2);
    const checkY = ball.y + Math.sin(angle) * (SQUARE_SIZE / 2);

    const i = Math.floor(checkX / SQUARE_SIZE);
    const j = Math.floor(checkY / SQUARE_SIZE);

    if (i >= 0 && i < numSquaresX && j >= 0 && j < numSquaresY) {
      if (squares[i][j] !== ball.reverseColor) {
        // Square hit! Update square color
        squares[i][j] = ball.reverseColor;

        // Determine bounce direction based on the angle
        if (Math.abs(Math.cos(angle)) > Math.abs(Math.sin(angle))) {
          ball.dx = -ball.dx;
        } else {
          ball.dy = -ball.dy;
        }
        generateParticles(ball, colorPalette, particles)
      }
    }
  }
}

function checkBoundaryCollision(ball, canvas, SQUARE_SIZE) {
  if (
    ball.x + ball.dx > canvas.width - SQUARE_SIZE / 2 ||
    ball.x + ball.dx < SQUARE_SIZE / 2
  ) {
    ball.dx = -ball.dx;
  }
  if (
    ball.y + ball.dy > canvas.height - SQUARE_SIZE / 2 ||
    ball.y + ball.dy < SQUARE_SIZE / 2
  ) {
    ball.dy = -ball.dy;
  }
}

function addRandomness(ball, MAX_SPEED, MIN_SPEED) {
  ball.dx += Math.random() * 0.01 - 0.005;
  ball.dy += Math.random() * 0.01 - 0.005;

  // Limit the speed of the ball
  ball.dx = Math.min(Math.max(ball.dx, -MAX_SPEED), MAX_SPEED);
  ball.dy = Math.min(Math.max(ball.dy, -MAX_SPEED), MAX_SPEED);

  // Make sure the ball always maintains a minimum speed
  if (Math.abs(ball.dx) < MIN_SPEED)
    ball.dx = ball.dx > 0 ? MIN_SPEED : -MIN_SPEED;
  if (Math.abs(ball.dy) < MIN_SPEED)
    ball.dy = ball.dy > 0 ? MIN_SPEED : -MIN_SPEED;
}

export { checkBoundaryCollision, checkSquareCollision, addRandomness };

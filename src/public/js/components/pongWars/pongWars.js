import { drawBall, drawBallTrail } from './drawBall.js';
import { drawParticles } from './particles.js';
import { addRandomness, checkBoundaryCollision, checkSquareCollision } from './physics.js';

export const colorPalette = {
  MysticMint: '#D9E8E3', //'#E7F2F6',
  NocturnalExpedition: '#151D28',
};
export let particles = [];

export function hexToRgb(hex) {
  // Eliminar el símbolo '#', si está presente
  hex = hex.replace(/^#/, '');

  // Convertir a un valor numérico y dividirlo en componentes r, g, b
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  // Devolver un objeto con las componentes RGB
  return { r: r, g: g, b: b };
}

export const pongWarsRender = () => {
  const path = document.getElementById('rootPath');
  path.textContent = 'Portfolio > PongWars > pongWars.js';

  const miNodoContainer = document.createElement('div');
  miNodoContainer.id = 'pongContainer';

  const miNodoCanva = document.createElement('canvas');
  miNodoCanva.id = 'pongCanvas';

  const miNodoScore = document.createElement('div');
  miNodoScore.id = 'score';

  miNodoContainer.appendChild(miNodoScore);
  miNodoContainer.appendChild(miNodoCanva);
  mainView.appendChild(miNodoContainer);  

  const canvas = document.getElementById('pongCanvas');
  const ctx = canvas.getContext('2d');
  const scoreElement = document.getElementById('score');

  const DAY_COLOR = colorPalette.MysticMint;
  const DAY_BALL_COLOR = colorPalette.NocturnalExpedition;
  const NIGHT_COLOR = colorPalette.NocturnalExpedition;
  const NIGHT_BALL_COLOR = colorPalette.MysticMint;
  const SQUARE_SIZE = 15;
  const MIN_SPEED = 5;
  const MAX_SPEED = 10;

  canvas.width = 1020;
  canvas.height = 1020;

  const numSquaresX = Math.floor(canvas.width / SQUARE_SIZE);
  const numSquaresY = Math.floor(canvas.height / SQUARE_SIZE);

  let dayPercentage = 0;
  let nightPercentage = 0;

  const squares = [];
  let ballTrail = [];

  // Populate the fields, one half day, one half night
  for (let i = 0; i < numSquaresX; i++) {
    squares[i] = [];
    for (let j = 0; j < numSquaresY; j++) {
      squares[i][j] = i < numSquaresX / 2 ? DAY_COLOR : NIGHT_COLOR;
    }
  }

  const balls = [
    {
      x: canvas.width / 4,
      y: canvas.height / 2,
      dx: 8,
      dy: -8,
      reverseColor: DAY_COLOR,
      ballColor: DAY_BALL_COLOR,
    },
    {
      x: (canvas.width / 4) * 3,
      y: canvas.height / 2,
      dx: -8,
      dy: 8,
      reverseColor: NIGHT_COLOR,
      ballColor: NIGHT_BALL_COLOR,
    },
  ];

  let iteration = 0;

  
  function drawSquares() {
    let dayScore = 0;
    let nightScore = 0;

    for (let i = 0; i < numSquaresX; i++) {
      for (let j = 0; j < numSquaresY; j++) {
        ctx.fillStyle = squares[i][j];
        ctx.fillRect(
          i * SQUARE_SIZE,
          j * SQUARE_SIZE,
          SQUARE_SIZE,
          SQUARE_SIZE
        );

        // Update scores
        if (squares[i][j] === DAY_COLOR) dayScore++;
        if (squares[i][j] === NIGHT_COLOR) nightScore++;

        let totalSquares = numSquaresX * numSquaresY;
        dayPercentage = (dayScore / totalSquares) * 100;
        nightPercentage = (nightScore / totalSquares) * 100;
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSquares();

    // ballTrail limit
    const maxTrailLength = 20;
    if (ballTrail.length > maxTrailLength) {
      ballTrail = ballTrail.slice(-maxTrailLength);
    }

    scoreElement.textContent = `day ${dayPercentage.toFixed(
      2
    )}% | night ${nightPercentage.toFixed(2)}%`;

    balls.forEach((ball) => {
      ballTrail.push({ x: ball.x, y: ball.y });
      drawBall(ball, ctx, SQUARE_SIZE);
      drawBallTrail(ball, ballTrail, SQUARE_SIZE, ctx);
      checkSquareCollision(ball, SQUARE_SIZE, numSquaresX, numSquaresY, squares)      
      checkBoundaryCollision(ball, canvas, SQUARE_SIZE)
      ball.x += ball.dx;
      ball.y += ball.dy;      
      addRandomness(ball, MAX_SPEED, MIN_SPEED)
    });

    drawParticles(particles, ctx);
    

    iteration++;

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
};

import { hexToRgb } from "./pongWars.js";

function drawBall(ball, ctx, SQUARE_SIZE) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, SQUARE_SIZE / 2, 0, Math.PI * 2, false);
  ctx.fillStyle = ball.ballColor;
  ctx.fill();
  ctx.closePath();
}

function drawBallTrail(ball, ballTrail, SQUARE_SIZE, ctx) {
  for (let i = 0; i < ballTrail.length; i++) {
    let alpha = i / ballTrail.length;
    ctx.beginPath();
    ctx.arc(
      ballTrail[i].x,
      ballTrail[i].y,
      SQUARE_SIZE / 2,
      0,
      Math.PI * 2,
      false
    );
    let color = hexToRgb(ball.ballColor);
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${
      0.2 * alpha
    })`;
    ctx.fill();
    ctx.closePath();
  }
}

export {drawBall, drawBallTrail}
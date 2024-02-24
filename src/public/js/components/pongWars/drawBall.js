export function drawBall(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, SQUARE_SIZE / 2, 0, Math.PI * 2, false);
  ctx.fillStyle = ball.ballColor;
  ctx.fill();
  ctx.closePath();
}
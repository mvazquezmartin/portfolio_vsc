export const pongWarsRender = () => {
  const path = document.getElementById('rootPath');
  path.textContent = 'Portfolio > PongWars > pongWars.js';

  const miNodoContainer = document.createElement('div');
  miNodoContainer.id = 'pongContainer';

  const miNodoCanva = document.createElement('canvas');
  miNodoCanva.id = 'pongCanvas';

  const miNodoScore = document.createElement('div');
  miNodoScore.id = 'score';

  miNodoContainer.appendChild(miNodoCanva);
  miNodoContainer.appendChild(miNodoScore);
  mainView.appendChild(miNodoContainer);

  const colorPalette = {
    MysticMint: '#E7F2F6',
    NocturnalExpedition: '#151D28',
  };

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
  let particles = [];

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

  function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, SQUARE_SIZE / 2, 0, Math.PI * 2, false);
    ctx.fillStyle = ball.ballColor;
    ctx.fill();
    ctx.closePath();
  }

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

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.radius = 1.5;
      this.speed = {
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
      };
      this.opacity = 1;
      this.fadeOut = 0.02;
      this.shouldRemove = false;
    }

    update() {
      this.x += this.speed.x;
      this.y += this.speed.y;
      this.opacity -= this.fadeOut;

      if (this.opacity <= 0) {
        this.shouldRemove = true;
      }
    }

    draw(ctx) {
      const rgbValues = hexToRgb(this.color)
      // const rgbValues = rgbColor.match(/\d+/g);
      // const r = parseInt(rgbValues[0]);
      // const g = parseInt(rgbValues[1]);
      // const b = parseInt(rgbValues[2]);

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b}, ${this.opacity})`;
      ctx.fill();
      ctx.closePath();
    }
  }

  function generateParticles(ball) {
    const particleColor =
      ball.ballColor === colorPalette.NocturnalExpedition
        ? colorPalette.NocturnalExpedition
        : colorPalette.MysticMint;
    for (let i = 0; i < 20; i++) {
      const particle = new Particle(ball.x, ball.y, particleColor);
      particles.push(particle);
    }
  }

  function drawParticles() {
    particles.forEach((particle, index) => {
      particle.update();
      particle.draw(ctx);

      // Eliminar la partícula si debe ser removida
      if (particle.shouldRemove) {
        particles.splice(index, 1);
      }
    });
  }

  function checkSquareCollision(ball) {
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
          generateParticles(ball);
        }
      }
    }
  }

  function checkBoundaryCollision(ball) {
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

  function addRandomness(ball) {
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

  function hexToRgb(hex) {
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

  function drawBallTrail(ball) {
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
      drawBall(ball);
      drawBallTrail(ball);
      checkSquareCollision(ball);
      checkBoundaryCollision(ball);
      ball.x += ball.dx;
      ball.y += ball.dy;
      addRandomness(ball);
    });

    drawParticles();

    iteration++;

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
};

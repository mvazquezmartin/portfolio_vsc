import { hexToRgb } from "./pongWars.js";

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
    const rgbValues = hexToRgb(this.color);
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

function generateParticles(ball, colorPalette, particles) {
  const particleColor =
    ball.ballColor === colorPalette.NocturnalExpedition
      ? colorPalette.NocturnalExpedition
      : colorPalette.MysticMint;
  for (let i = 0; i < 20; i++) {
    const particle = new Particle(ball.x, ball.y, particleColor);
    particles.push(particle);
  }
}

function drawParticles(particles, ctx) {
  particles.forEach((particle, index) => {
    particle.update();
    particle.draw(ctx);

    // Eliminar la partícula si debe ser removida
    if (particle.shouldRemove) {
      particles.splice(index, 1);
    }
  });
}



export { Particle, generateParticles, drawParticles };

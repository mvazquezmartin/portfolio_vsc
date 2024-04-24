import { arrow_down, arrow_up, sadFace, trophy } from './svg.js';

export default class GameManager {
  constructor(maxAttempts = 5, minNum = 0, maxNum = 99) {
    this.maxAttempts = maxAttempts;
    this.minNum = minNum;
    this.maxNum = maxNum;
    this.konami = '0303456';
    this.reset();
  }

  generateRandomNumber() {
    return (
      Math.floor(Math.random() * (this.maxNum - this.minNum + 1)) + this.minNum
    );
  }

  tryGuess(num) {
    if (this.isFinished) {
      return;
    }

    this.attempts++;

    if (num === this.magicNumber) {
      this.isFinished = true;
      return {
        icon: 'success',
        result_icon: trophy,
        alert_icon: '🏆',
        message: `You win! The Number was ${this.magicNumber}`,
      };
    }

    if (this.attempts === this.maxAttempts) {
      this.isFinished = true;
      return {
        icon: 'error',
        alert_icon: '😓',
        result_icon: sadFace,
        message: `The Number was ${this.magicNumber}`,
      };
    }

    if (num < this.magicNumber) {
      return { result_icon: arrow_up };
    } else {
      return { result_icon: arrow_down };
    }
  }

  attemptsMsg() {
    return this.maxAttempts - this.attempts;
  }

  reset() {
    this.attempts = 0;
    this.isFinished = false;
    this.magicNumber = this.generateRandomNumber();
  }
}

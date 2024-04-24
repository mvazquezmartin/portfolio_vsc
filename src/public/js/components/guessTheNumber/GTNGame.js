import GameManager from './GTNManager.js';
import alert from './sweetAler.js';

export class GuessTheNumberGame {
  constructor() {
    this.game = new GameManager();
    this.game_number = this.game.magicNumber;
    this.konami = this.game.konami;
    this.$btn_reset = document.querySelector('.reset-btn');
    this.$btn_guess = document.querySelector('.guess-btn');
    this.$btn_numbers = document.querySelectorAll('.btn-number');
    this.$input_number = document.querySelector('#input-number');
    this.$counter = document.querySelector('#counter');
    this.$attemps = document.querySelectorAll('.attemps-counts');
    this.sound_numbers = new Audio('../../../assets/audio/click-numbers.wav');
    this.sound_guess = new Audio('../../../assets/audio/click-btn-guess.wav');
    this.sound_reset = new Audio('../../../assets/audio/click-btn-reset.wav');

    // NUMERIC KEYBOARD LISTENER
    this.$btn_numbers.forEach((button) => {
      button.addEventListener('click', () => {
        const valueBtn = button.textContent;
        let valueInput = this.$input_number.textContent;

        if (valueInput === '00') valueInput = '';

        valueInput += valueBtn;

        if (valueInput.length > 2) {
          valueInput = valueInput.slice(-1);
        }

        this.$input_number.textContent = valueInput;
        this.sound_numbers.currentTime = 0;
        this.sound_numbers.play();
      });
    });

    // BTN GUESS LISTENER
    this.$btn_guess.addEventListener('click', () => {
      this.handleGuess();
      this.sound_guess.currentTime = 0;
      this.sound_guess.volume = 0.5;
      this.sound_guess.play();
    });

    // BTN RESET LISTENER
    this.$btn_reset.addEventListener('click', () => {
      this.resetGame();
      this.sound_reset.currentTime = 0;
      this.sound_reset.volume = 0.5;
      this.sound_reset.play();
    });
  }

  handleGuess() {
    if (this.game.isFinished) {
      return;
    }

    const input_value = this.$input_number.textContent.trim();
    const numberGuess = Number(input_value);

    if (input_value === '') {
      alert('warning', 'INVALID INPUT', 'Please enter a valid number.');
      return;
    }

    const gameInput = this.game.tryGuess(numberGuess);
    this.updateGameUI(gameInput);
    this.$input_number.textContent = '';
  }

  updateGameUI(result) {
    this.$counter.textContent = this.game.attemptsMsg();

    for (let i = 0; i < this.$attemps.length; i++) {
      const attemptContainer = this.$attemps[i];
      const arrowSpan = attemptContainer.querySelector('span:nth-child(1)');
      const numberSpan = attemptContainer.querySelector('span:nth-child(2)');

      if (!arrowSpan.textContent && !numberSpan.textContent) {
        arrowSpan.innerHTML = result.result_icon;
        numberSpan.textContent = this.$input_number.textContent;
        break;
      }
    }

    if ('message' in result) {
      setTimeout(() => {
        alert(result.icon, result.alert_icon, result.message);
      }, 100);
    }
  }

  resetGame() {
    this.game.reset();
    this.$counter.textContent = this.game.attemptsMsg();
    this.$input_number.textContent = '00';

    const attemptContainers = this.$attemps;
    for (let i = 0; i < attemptContainers.length; i++) {
      const attemptContainer = attemptContainers[i];
      const arrowSpan = attemptContainer.querySelector('span:nth-child(1)');
      const numberSpan = attemptContainer.querySelector('span:nth-child(2)');
      arrowSpan.textContent = '';
      numberSpan.textContent = '';
    }

    this.game_number = this.game.magicNumber;
  }
}

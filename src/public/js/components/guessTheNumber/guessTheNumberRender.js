import { GuessTheNumberGame } from './GTNGame.js';
import { createHtmlGuessTheNumber } from './guessNumberHTML.js';
import alert from './sweetAler.js';

const guessTheNumberRender = () => {
  const path = document.getElementById('rootPath');
  path.textContent = 'Portfolio > GuessTheNumber > guessTheNumber.js';

  const $container = document.createElement('section');
  $container.classList.add('container-game');

  const renderHtml = createHtmlGuessTheNumber();

  $container.appendChild(renderHtml);
  mainView.appendChild($container);

  const guessTheNumberInit = new GuessTheNumberGame();
  // document.addEventListener('DOMContentLoaded', () => {
  //   guessTheNumberInit;
  // });

  const $btnnumbers = document.querySelectorAll('.btn-number');
  const $btnGuess = document.querySelector('.guess-btn');
  const $inputNumber = document.querySelector('#input-number');
  const konami = guessTheNumberInit.konami;
  let konami_code = '';

  $btnnumbers.forEach((button) => {
    button.addEventListener('click', () => {
      const valueBtn = button.textContent;
      konami_code += valueBtn;

      if (konami_code.includes(konami)) {
        alert(
          'warning',
          'Magic Number',
          `You are so weak like my friend Bojo: ${guessTheNumberInit.game_number}`
        );
        konami_code = '';
        $inputNumber.textContent = '';
      }
    });
  });

  $btnGuess.addEventListener('click', () => {
    konami_code = '';
  });
};

export { guessTheNumberRender };

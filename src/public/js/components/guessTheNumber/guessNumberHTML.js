const createKeyboard = (keyboardSection) => {
  const rowsNumbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0'],
  ];

  rowsNumbers.forEach((rowNumbers) => {
    const row = document.createElement('div');
    row.classList.add('row-keyboard');

    rowNumbers.forEach((number) => {
      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('btn-number');
      buttonDiv.textContent = number;
      row.appendChild(buttonDiv);
    });

    keyboardSection.appendChild(row);
  });
};

export const createHtmlGuessTheNumber = () => {
  const $container = document.createElement('div');
  $container.classList.add('container-gtn');

  const $title = document.createElement('h1'); //append container
  $title.classList.add('glitch');
  $title.setAttribute('data-text', 'GUESS THE NUMBER');
  $title.textContent = 'GUESS THE NUMBER';

  const $subTitle = document.createElement('h2'); //append container
  $subTitle.innerHTML = `You have <span id="counter">5</span> attempts to guess the number
  between 0 and 99.`;

  const $attempsContainer = document.createElement('div'); //append container
  $attempsContainer.classList.add('attemps-container');
  const $attempsTitle = document.createElement('p');
  $attempsTitle.id = 'attemps-title';
  const $attempsCountsContainer = document.createElement('div');
  $attempsCountsContainer.classList.add('attemps-counts-container');

  let attempsLimit = 0;
  while (attempsLimit < 5) {
    const $attempsCounts = document.createElement('div');
    $attempsCounts.classList.add('attemps-counts');
    const $spanUp = document.createElement('span');
    const $spanDown = document.createElement('span');

    $attempsCounts.appendChild($spanUp);
    $attempsCounts.appendChild($spanDown);
    $attempsCountsContainer.appendChild($attempsCounts);

    attempsLimit++;
  }

  $attempsContainer.appendChild($attempsTitle);
  $attempsContainer.appendChild($attempsCountsContainer);

  const $inputContainer = document.createElement('div'); //append container
  $inputContainer.classList.add('input-container');
  const $inputNumber = document.createElement('span');
  $inputNumber.id = 'input-number';
  $inputContainer.appendChild($inputNumber);

  const $keyboard = document.createElement('section'); //append container
  $keyboard.classList.add('keyboard');
  createKeyboard($keyboard);

  const $btnContainer = document.createElement('section'); //append container
  $btnContainer.classList.add('btn-container');
  const $btnGuess = document.createElement('div');
  $btnGuess.classList.add('guess-btn');
  $btnGuess.textContent = 'Guess';
  const $btnReset = document.createElement('div');
  $btnReset.classList.add('reset-btn');
  $btnReset.textContent = 'Reset';
  $btnContainer.appendChild($btnGuess);
  $btnContainer.appendChild($btnReset);

  $container.appendChild($title);
  $container.appendChild($subTitle);
  $container.appendChild($attempsContainer);
  $container.appendChild($inputContainer);
  $container.appendChild($keyboard);
  $container.appendChild($btnContainer);

  return $container;
};

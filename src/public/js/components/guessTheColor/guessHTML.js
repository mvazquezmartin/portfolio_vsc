const createHtmlRange = (color, letter) => {
  const $label = document.createElement('label');

  const $valueContainer = document.createElement('div');
  $valueContainer.classList.add('value-container');

  const $spanColor = document.createElement('span');
  $spanColor.textContent = color;

  const $quantityAndButtons = document.createElement('div');
  $quantityAndButtons.classList.add('quantity');

  const $decrementButton = document.createElement('span');
  $decrementButton.textContent = '-';
  $decrementButton.id = `decrement-button-${letter}`;
  $decrementButton.classList.add('button-value');

  const $value = document.createElement('span');
  $value.textContent = 0;
  $value.classList.add(`${color}-value`);

  const $incrementButton = document.createElement('span');
  $incrementButton.textContent = '+';
  $incrementButton.id = `increment-button-${letter}`;
  $incrementButton.classList.add('button-value');

  $quantityAndButtons.appendChild($decrementButton);
  $quantityAndButtons.appendChild($value);
  $quantityAndButtons.appendChild($incrementButton);

  $valueContainer.appendChild($spanColor);
  $valueContainer.appendChild($quantityAndButtons);

  const $input = document.createElement('input');
  $input.type = 'range';
  $input.value = '0';
  $input.step = '1';
  $input.max = '255';
  $input.classList.add(`color-${letter}`);

  $label.appendChild($valueContainer);
  $label.appendChild($input);

  return $label;
};

export const createHtmlGuessTheColor = () => {
  const $container = document.createElement('div');
  $container.classList.add('container-gtc');

  const $title = document.createElement('h1');
  $title.textContent = 'GUESS THE COLOR';

  const $containerColor = document.createElement('div'); //append container
  $containerColor.classList.add('container-color');
  const $colorResult = document.createElement('div');
  $colorResult.classList.add('color-result');
  const $colorGuess = document.createElement('div');
  $colorGuess.classList.add('color-guess');
  $containerColor.appendChild($colorResult);
  $containerColor.appendChild($colorGuess);

  const $colorMaker = document.createElement('color-maker'); //append container
  $colorMaker.classList.add('color-maker');
  const $RED = createHtmlRange('red', 'r');
  const $GREEN = createHtmlRange('green', 'g');
  const $BLUE = createHtmlRange('blue', 'b');
  $colorMaker.appendChild($RED);
  $colorMaker.appendChild($GREEN);
  $colorMaker.appendChild($BLUE);

  const $attempsContainer = document.createElement('div'); // append container
  $attempsContainer.classList.add('attemps-container');
  const $attemps = document.createElement('span');
  $attemps.textContent = 'ATTEMPS:';
  $attemps.classList.add('attemps');
  const $heartSVG = document.createElement('div');
  $heartSVG.classList.add('hearts');
  $attempsContainer.appendChild($attemps);
  $attempsContainer.appendChild($heartSVG);

  const $percentage = document.createElement('div'); // append container
  $percentage.classList.add('percentage');

  const $buttonContainer = document.createElement('div'); // append container
  $buttonContainer.classList.add('button-container');
  const $buttonGuess = document.createElement('button');
  $buttonGuess.textContent = 'GUESS';
  $buttonGuess.classList.add('button-guess');
  const $buttonReset = document.createElement('button');
  $buttonReset.textContent = 'RESET';
  $buttonReset.classList.add('button-reset');
  $buttonContainer.appendChild($buttonGuess);
  $buttonContainer.appendChild($buttonReset);

  const $pyro = document.createElement('div'); //append container
  $pyro.id = 'pyro';
  const $before = document.createElement('div');
  $before.id = 'before';
  const $after = document.createElement('div');
  $after.id = 'after';
  $pyro.appendChild($before);
  $pyro.appendChild($after);

  $container.appendChild($title);
  $container.appendChild($containerColor);
  $container.appendChild($colorMaker);
  $container.appendChild($attempsContainer);
  $container.appendChild($percentage);
  $container.appendChild($buttonContainer);
  $container.appendChild($pyro);

  return $container;
};

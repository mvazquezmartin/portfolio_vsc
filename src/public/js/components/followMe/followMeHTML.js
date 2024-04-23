const createRow = () => {
  const $row = document.createElement('div');
  $row.classList.add('square-row');

  let quantity_square = 0;
  while (quantity_square < 3) {
    const $flipSquare = document.createElement('div');
    $flipSquare.classList.add('flip-square');

    const $flipSquareInner = document.createElement('div');
    $flipSquareInner.classList.add('flip-square-inner');

    const $flipSquareFront = document.createElement('div');
    $flipSquareFront.classList.add('flip-square-front');

    const $square = document.createElement('div');
    $square.classList.add('square');

    $flipSquare.appendChild($flipSquareInner);
    $flipSquareInner.appendChild($flipSquareFront);
    $flipSquareInner.appendChild($square);

    $row.appendChild($flipSquare);

    quantity_square++;
  }

  return $row;
};

export const createHtmlFollowMe = () => {
  const $container = document.createElement('div');
  $container.classList.add('container-fm');

  const $titleContainer = document.createElement('div'); //append container
  $titleContainer.classList.add('title-container');
  const $title = document.createElement('h1');
  $title.textContent = 'Follow Me!';
  const $level = document.createElement('span');
  $level.classList.add('level');
  $titleContainer.appendChild($title);
  $titleContainer.appendChild($level);

  const $squareContainer = document.createElement('section'); //append container
  $squareContainer.classList.add('square-container');
  const $row_1 = createRow();
  const $row_2 = createRow();
  const $row_3 = createRow();
  $squareContainer.appendChild($row_1);
  $squareContainer.appendChild($row_2);
  $squareContainer.appendChild($row_3);

  const $btnContainer = document.createElement('div');
  $btnContainer.classList.add('btn-container');
  const $try = document.createElement('span');
  $try.classList.add('try');
  const $btn = document.createElement('button');
  $btn.id = 'btn-action';
  $btn.textContent = 'START';
  const $best = document.createElement('span');
  $best.classList.add('best');
  $best.textContent = 'Best:';
  $btnContainer.appendChild($try);
  $btnContainer.appendChild($btn);
  $btnContainer.appendChild($best);

  $container.appendChild($titleContainer);
  $container.appendChild($squareContainer);
  $container.appendChild($btnContainer);

  return $container;
};

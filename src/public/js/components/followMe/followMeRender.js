import { createHtmlFollowMe } from './followMeHTML.js';

const followMeRender = () => {
  const path = document.getElementById('rootPath');
  path.textContent = 'Portfolio > FollowMe > followMe.js';

  const $container = document.createElement('section');
  $container.classList.add('container-games');

  const renderHtml = createHtmlFollowMe();
  $container.appendChild(renderHtml);
  mainView.appendChild($container);

  const $squares = document.querySelectorAll('.square');
  const $btnAction = document.querySelector('#btn-action');
  const $squaresRotate = document.querySelectorAll('.flip-square');
  const $try_count = document.querySelector('.try');
  const $best_count = document.querySelector('.best');
  const $level_title = document.querySelector('.level');
  const $front_flip_squares = document.querySelectorAll('.flip-square-front');
  const localStorage = window.localStorage;

  const context = new AudioContext();
  const sequence = [];
  const inputSequence = [];
  const wrong = { note: 200, type: 'triangle' };
  const start = { note: 235, type: 'sine' };
  let index_count = 0;
  let current_oscillator = null;
  let welcome_interval;
  let welcome_sequence_running = true;

  const notes = [
    248.55, // Do
    264.32, // Do#
    279.98, // Re
    295.57, // Re#
    311.14, // Mi
    330.77, // Fa
    349.24, // Fa#
    370.59, // Sol
    392.0, // Sol#
    415.3, // La
    440.0, // La#
    466.16, // Si
  ];

  const welcome = [0, 1, 2, 5, 4, 3, 6, 7, 8];

  function jsNote(frequency, type = 'sine') {
    const o = context.createOscillator();
    const g = context.createGain();
    o.connect(g);
    o.type = type;
    o.frequency.value = frequency;
    g.connect(context.destination);
    o.start(0);
    g.gain.value = 0.9;
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1.5);
    return o;
  }

  function loadLocalStorage() {
    const try_counter = localStorage.try_count;
    const best_counter = localStorage.best_count;

    if (try_counter) {
      $try_count.textContent = `Try: ${try_counter}`;
    } else {
      $try_count.textContent = 'Try: 0';
      localStorage.try_count = '0';
    }

    if (best_counter) {
      $best_count.textContent = `Best: Level ${best_counter}`;
    } else {
      localStorage.best_count = '0';
    }
  }

  function currentNote(note, type) {
    if (current_oscillator) current_oscillator.stop();
    const noteFrequency = note;
    current_oscillator = jsNote(noteFrequency, type);
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * $squares.length);
  }

  function pushSequence() {
    const numSequence = getRandomNumber();
    sequence.push(numSequence);
  }

  async function generateSequence() {
    for (let i = 0; i < sequence.length; i++) {
      const active = sequence[i];
      const noteFrequency = notes[active];

      await new Promise((resolve) => {
        setTimeout(() => {
          jsNote(noteFrequency);
          $squares[active].classList.add('active-sequence');
          resolve();
        }, 200);
      });

      await new Promise((resolve) => {
        setTimeout(() => {
          $squares.forEach((square) => {
            square.classList.remove('active-sequence');
            inputSequence.length = 0;
          });
          resolve();
        }, 300);
      });
    }
  }

  function updateRecord() {
    const record = sequence.length - 1;
    const bestCount = Number(localStorage.best_count);

    if (bestCount < record) localStorage.best_count = record;

    $best_count.textContent = `Best: Level ${localStorage.best_count}`;
  }

  function updateLevel(secuence = sequence.length) {
    $level_title.textContent = `Level ${secuence}`;
  }

  function addANewSequence() {
    pushSequence();
    setTimeout(() => {
      generateSequence();
    }, 750);
    updateRecord();
    updateLevel();
    index_count = 0;
  }

  function checkSequence(index) {
    // console.log({ index_count, inputSequence, sequence });
    if (sequence[index] === inputSequence[index]) {
      index_count++;
      if (sequence.length === inputSequence.length) {
        addANewSequence();
      }
      return true;
    } else {
      return false;
    }
  }

  async function welcomeSequence(sequence) {
    for (let i = 0; i < sequence.length; i++) {
      if (!welcome_sequence_running) return;
      const active = sequence[i];

      await new Promise((resolve) => {
        setTimeout(() => {
          $front_flip_squares[active].classList.add('front-active');
          resolve();
        }, 300);
      });

      await new Promise((resolve) => {
        setTimeout(() => {
          $front_flip_squares.forEach((square) => {
            square.classList.remove('front-active');
            inputSequence.length = 0;
          });
          resolve();
        }, 300);
      });
    }
  }

  function playWelcomeSequence() {
    welcome_sequence_running = true;
    const welcome_sequence = welcome.slice().sort(() => Math.random() - 0.5);
    welcomeSequence(welcome_sequence);
    welcome_interval = setTimeout(playWelcomeSequence, 7000);
  }

  function resetValue() {
    sequence.length = 0;
    inputSequence.length = 0;
    index_count = 0;
  }

  function stopWelcomeSequence() {
    welcome_sequence_running = false;
    clearTimeout(welcome_interval);
  }

  function init() {
    stopWelcomeSequence();
    $squaresRotate.forEach((square) => {
      square.classList.add('rotate-square');
    });
    resetValue();
    pushSequence();
    setTimeout(() => generateSequence(), 1000);
  }

  $front_flip_squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      stopWelcomeSequence();
      const noteFrequency = notes[index];
      currentNote(noteFrequency);
      square.classList.add('front-active');
      setTimeout(() => {
        square.classList.remove('front-active');
      }, 300);
    });
  });

  $squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      square.classList.add('active-sequence');
      inputSequence.push(index);

      currentNote(notes[index]);

      setTimeout(() => {
        square.classList.remove('active-sequence');
      }, 250);

      if (!checkSequence(index_count)) {
        square.classList.remove('active-sequence');
        square.classList.add('wrong-sequence');

        currentNote(wrong.note, wrong.type);
        updateRecord();
        resetValue();

        setTimeout(() => {
          square.classList.remove('wrong-sequence');
        }, 600);

        setTimeout(() => {
          $squaresRotate.forEach((square) => {
            square.classList.remove('rotate-square');
            $btnAction.style.visibility = 'visible';
            updateLevel(1);
          });
        }, 800);
      }
    });
  });

  $btnAction.addEventListener('click', () => {
    localStorage.try_count = Number(localStorage.try_count) + 1;
    const tryCount = localStorage.try_count;
    $try_count.textContent = `Try: ${tryCount}`;
    $btnAction.style.visibility = 'hidden';
    currentNote(start.note, start.type);
    init();
  });

  loadLocalStorage();
  playWelcomeSequence();
};

export { followMeRender };

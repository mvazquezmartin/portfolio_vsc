import { createHtmlGuessTheColor } from './guessHTML.js';
import { heart8bit } from './hearSVG.js';

const guessTheColorRender = () => {
  const path = document.getElementById('rootPath');
  path.textContent = 'Portfolio > Magic8Ball > guessTheColor.js';

  const renderHtml = createHtmlGuessTheColor();

  mainView.appendChild(renderHtml);
};

export { guessTheColorRender };

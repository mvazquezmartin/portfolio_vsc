import { imgPath } from '../../assetsPath/assetsPath.js';

const cvGeneratorRender = () => {
  const rootPath = document.getElementById('rootPath');
  rootPath.innerHTML = `Portfolio > CVGenerator > CVGenerator.jsx`;

  const $cvContainer = document.createElement('div');
  $cvContainer.classList.add('cv-container');

  const $link = document.createElement('a');
  $link.classList.add('cv-link');
  $link.setAttribute('href', 'https://cvgenerator-harvard.vercel.app/');
  $link.setAttribute('target', '_blank');
  $link.innerHTML = `<i class="bi bi-link-45deg"></i> CV Generator`;

  const $screenshotContainer = document.createElement('div');
  $screenshotContainer.classList.add('cv-screenshot-container');

  const $screenshot = document.createElement('img');
  $screenshot.classList.add('cv-screenshot');
  $screenshot.setAttribute('src', imgPath.CVGENERATOR);
  $screenshot.alt = 'cvgenerator';
  $screenshot.id = 'cvgenerator';

  $cvContainer.appendChild($link);
  $cvContainer.appendChild($screenshotContainer);
  $screenshotContainer.appendChild($screenshot);
  mainView.appendChild($cvContainer);
};

export { cvGeneratorRender };

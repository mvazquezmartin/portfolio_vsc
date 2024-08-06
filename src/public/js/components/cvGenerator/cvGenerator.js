import { imgPath } from '../../assetsPath/assetsPath.js';

const cvGeneratorRender = () => {
  const rootPath = document.getElementById('rootPath');
  rootPath.style.display = 'flex';
  rootPath.innerHTML = `Portfolio > CVGenerator > CVGenerator.jsx`;

  const $imgContainer = document.createElement('div');
  $imgContainer.classList.add('assetsContainer');
  $imgContainer.style.display = 'flex';
  $imgContainer.style.flexDirection = 'column-reverse';

  const $link = document.createElement('a');
  $link.setAttribute('href', 'https://cvgenerator-harvard.vercel.app/');
  $link.setAttribute('target', '_blank');
  $link.style.cursor = 'pointer';
  $link.textContent = '🔗 CV Generator';

  const $imageAsset = document.createElement('img');
  $imageAsset.classList.add('assets');
  $imageAsset.setAttribute('src', imgPath.CVGENERATOR);
  $imageAsset.alt = 'cvgenerator';
  $imageAsset.id = 'cvgenerator';

  $imgContainer.appendChild($imageAsset);
  $imgContainer.appendChild($link);
  mainView.appendChild($imgContainer);
};

export { cvGeneratorRender };

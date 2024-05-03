const ilyudo = (img, name) => {
  const rootPath = document.getElementById('rootPath');
  rootPath.style.display = 'flex';
  rootPath.innerHTML = `Portfolio > Assets > ${name}.jpg`;

  const $imgContainer = document.createElement('div');
  $imgContainer.classList.add('assetsContainer');

  const $imageAsset = document.createElement('img');
  $imageAsset.classList.add('assets');
  $imageAsset.setAttribute('src', img);
  $imageAsset.alt = name;
  $imageAsset.id = name;

  $imgContainer.appendChild($imageAsset);
  mainView.appendChild($imgContainer);
};

export { ilyudo };

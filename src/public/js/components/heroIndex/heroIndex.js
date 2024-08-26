import { pdfPath } from '../../assetsPath/assetsPath.js';
import { renderExtension } from './recommendedExtension.js';
import { renderDeveloped } from './renderDeveloped.js';
import { createIconWithText, createRecent } from './renderHeroStar.js';

const renderMainText = () => {
  const $rootPath = document.getElementById('rootPath');
  $rootPath.textContent = '';
  $rootPath.style.visibility = 'hidden';

  //estructura
  const containerMainHero = document.createElement('div');
  containerMainHero.classList.add('containerHeroView');

  //container Hero aside
  const heroContainer = document.createElement('div');
  heroContainer.classList.add('containerIntroLeft');

  //titulo portfolio
  const tituloContainer = document.createElement('div');
  tituloContainer.classList.add('titleMain');

  const tituloHero = document.createElement('h1');
  tituloHero.textContent = 'Matías Vazquez Martin';

  const subTituloHero = document.createElement('h2');
  subTituloHero.textContent = 'FullStack Developer';

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btnContainer');

  // const btnDownload = document.createElement('a');
  // btnDownload.href = pdfPath.CV_ESP;
  // btnDownload.download = 'cv_mvazquezmartin.pdf';
  // btnDownload.classList.add('btnDownload');
  // btnDownload.textContent = 'Download CV';

  const btnSimplified = document.createElement('a');
  btnSimplified.href = '/simplified';
  btnSimplified.classList.add('btnSimplified');
  btnSimplified.textContent = 'Versión Simplicada';

  // const iconPdf = document.createElement("i");
  // iconPdf.classList.add("bi", "bi-0-circle");

  //informacion de navagacion y ultimos trabajos
  const containerStartAndRecent = document.createElement('div');
  containerStartAndRecent.classList.add('startAndRecent');

  const containerStart = document.createElement('div');
  containerStart.classList.add('containerStart');

  const tituloDescription = document.createElement('h2');
  tituloDescription.textContent = 'Start';

  const linkedin = createIconWithText(
    'bi bi-linkedin',
    'https://www.linkedin.com/in/matiasvazquezmartin/',
    '@matiasvazquezmartin'
  );
  const github = createIconWithText(
    'bi bi-github',
    'https://github.com/mvazquezmartin',
    '@mvazquezmartin'
  );
  const email = createIconWithText(
    'bi bi-envelope-at',
    '#',
    'matias.vazquezmartin@gmail.com'
  );
  const downloadcv = createIconWithText(
    'bi bi-download',
    pdfPath.CV_ESP,
    'Download CV'
  );

  const containerRecent = document.createElement('div');
  containerRecent.classList.add('containerRecent');

  const tituloRecientesDescription = document.createElement('h2');
  tituloRecientesDescription.textContent = 'Recent';

  const ecommerce = createRecent('ecommerceMongodb', 'ecommerce-api');
  const magicNumber = createRecent('guessmagicnumber', 'app');
  const app = createRecent('WhatWouldYouRather', 'Proyect');
  const dsm = createRecent('DSM_reactjs', 'front');
  const portfolio = createRecent('VSCodeMvm', 'myStuff');

  //container Hero aside
  const containerHeroAside = document.createElement('div');
  containerHeroAside.classList.add('containerIntroRight');

  containerMainHero.appendChild(heroContainer);
  heroContainer.appendChild(tituloContainer);
  tituloContainer.appendChild(tituloHero);
  tituloContainer.appendChild(subTituloHero);
  tituloContainer.appendChild(btnContainer);
  // btnContainer.appendChild(btnDownload);
  btnContainer.appendChild(btnSimplified);
  // btnDownload.appendChild(iconPdf)
  heroContainer.appendChild(containerStartAndRecent);
  containerStartAndRecent.appendChild(containerStart);
  containerStart.appendChild(tituloDescription);
  containerStart.appendChild(linkedin);
  containerStart.appendChild(github);
  containerStart.appendChild(email);
  containerStart.appendChild(downloadcv);

  containerStartAndRecent.appendChild(containerRecent);
  containerRecent.appendChild(tituloRecientesDescription);
  containerRecent.appendChild(ecommerce);
  containerRecent.appendChild(dsm);
  containerRecent.appendChild(magicNumber);
  containerRecent.appendChild(app);
  containerRecent.appendChild(portfolio);

  containerMainHero.appendChild(containerHeroAside);

  const extension = renderExtension();
  containerHeroAside.appendChild(extension);

  renderDeveloped(containerHeroAside);

  mainView.appendChild(containerMainHero);
};

export { renderMainText };

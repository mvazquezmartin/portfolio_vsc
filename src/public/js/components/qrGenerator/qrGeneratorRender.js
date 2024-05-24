export const qrGeneratorRender = () => {
  const path = document.getElementById('rootPath');
  path.textContent = 'Portfolio > QRgenerator > qrGenerator.js';

  const $containerQR = document.createElement('div');
  $containerQR.classList.add('container-body');

  const $container = document.createElement('section');
  $container.classList.add('container-qr');

  const $title = document.createElement('h1');
  $title.textContent = 'Enter your URL';

  const $input = document.createElement('input');
  $input.type = 'text';
  $input.autocomplete = 'off';
  $input.id = 'qrText';
  $input.placeholder = '@mvazquezmartin';

  const $imgBox = document.createElement('div');
  $imgBox.id = 'imgBox';
  const $qrImg = document.createElement('img');
  $qrImg.src =
    'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://github.com/mvazquezmartin';
  $qrImg.id = 'qrImage';
  $imgBox.appendChild($qrImg);

  const $btnContainer = document.createElement('div');
  $btnContainer.classList.add('btn-container');
  const $btnGenerate = document.createElement('button');
  $btnGenerate.id = 'btnGenerate';
  $btnGenerate.textContent = 'Generate QR';
  const $btnDownload = document.createElement('button');
  $btnDownload.id = 'btnDownload';
  $btnDownload.textContent = 'Download 💾';
  $btnContainer.appendChild($btnGenerate);
  $btnContainer.appendChild($btnDownload);

  $containerQR.appendChild($container);
  $container.appendChild($title);
  $container.appendChild($input);
  $container.appendChild($imgBox);
  $container.appendChild($btnContainer);
  mainView.appendChild($containerQR);

  const defaultQR =
    'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://github.com/mvazquezmartin';

  function generateQR() {
    const qrTextValue = $input.value;
    if (qrTextValue.trim().length !== 0) {
      const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrTextValue}`;
      $qrImg.src = qrURL;
      $btnDownload.dataset.url = qrURL;
    } else {
      $input.classList.add('error');
      setTimeout(() => {
        $input.classList.remove('error');
      }, 700);
    }
  }

  function downloadQR() {
    let qrUrl = $btnDownload.dataset.url;
    if (!qrUrl) {
      qrUrl = defaultQR;
    }
    fetch(qrUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'qrcode.png';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch((error) => console.error('Error downloading QR code:', error));
  }

  $btnGenerate.addEventListener('click', generateQR);
  $btnDownload.addEventListener('click', downloadQR);
};

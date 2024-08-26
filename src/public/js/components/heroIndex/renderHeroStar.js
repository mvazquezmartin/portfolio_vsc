const createElementWithClass = (tagName, classNames) => {
  const element = document.createElement(tagName);
  if (classNames) {
    const classList = classNames.split(' ');
    element.classList.add(...classList);
  }
  return element;
};

const createIconWithText = (iconClassName, dir, text) => {
  const container = createElementWithClass('div', 'iconWithText');
  const icon = createElementWithClass('i', iconClassName);
  const span = document.createElement('span');
  span.textContent = text;

  if (dir !== '#') {
    const link = document.createElement('a');
    link.href = dir;
    link.target = '_blank';
    link.download = 'cv_mvazquezmartin.pdf';
    container.appendChild(link);
    link.appendChild(icon);
    link.appendChild(span);
  } else {
    container.appendChild(icon);
    container.appendChild(span);

    // Crear un tooltip temporal
    const tooltip = document.createElement('span');
    tooltip.textContent = '¡Copiado!';
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'black';
    tooltip.style.color = 'white';
    tooltip.style.padding = '3px 5px';
    tooltip.style.borderRadius = '3px';
    tooltip.style.top = '-15px';
    tooltip.style.left = '25px';
    tooltip.style.fontSize = '12px';
    tooltip.style.opacity = '0';
    tooltip.style.display = 'none';
    tooltip.style.transition = 'opacity 0.3s ease';
    tooltip.style.transition = 'display 0.3s ease';

    container.style.position = 'relative';
    container.appendChild(tooltip);

    container.addEventListener('click', () => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          tooltip.style.display = 'block';
          tooltip.style.opacity = '1';

          setTimeout(() => {
            tooltip.style.opacity = '0';
            tooltip.style.display = 'none';
          }, 1500);
        })
        .catch((err) => {
          console.error('Error al copiar al portapapeles: ', err);
        });
    });

    container.style.cursor = 'pointer';
  }

  return container;
};

const createRecent = (recent, path) => {
  const container = createElementWithClass('div', 'heroRecent');
  const spanRecent = createElementWithClass('span', 'spanRecent');
  spanRecent.textContent = recent;
  const spanPath = createElementWithClass('span', 'spanPath');
  spanPath.textContent = `C:/Users/mvm/Documents/${path}`;

  container.appendChild(spanRecent);
  container.appendChild(spanPath);
  return container;
};

export { createIconWithText, createRecent };

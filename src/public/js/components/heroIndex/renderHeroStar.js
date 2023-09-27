const createElementWithClass = (tagName, classNames) => {
  const element = document.createElement(tagName);
  if (classNames) {
    const classList = classNames.split(" ");
    element.classList.add(...classList);
  }
  return element;
};

const createIconWithText = (iconClassName, text) => {
  const container = createElementWithClass("div", "iconWithText");
  const icon = createElementWithClass("i", iconClassName);
  const span = createElementWithClass("span");
  span.textContent = text;
  container.appendChild(icon);
  container.appendChild(span);
  return container;
};

const createRecent = (recent, path) => {
  const container = createElementWithClass("div", "heroRecent");
  const spanRecent = createElementWithClass("span", "spanRecent");
  spanRecent.textContent = recent;
  const spanPath = createElementWithClass("span", "spanPath");
  spanPath.textContent = `C:/Users/mvm/Documents/${path}`;

  container.appendChild(spanRecent);
  container.appendChild(spanPath);
  return container;
};

export { createIconWithText, createRecent };

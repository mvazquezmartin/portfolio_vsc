import { iconPath } from "../../assetsPath/assetsPath.js";

const renderDeveloped = (nodo) => {
  const containerLenguage = document.createElement("div");
  containerLenguage.classList.add("containerLenguage");

  const lenguageH2 = document.createElement("h2");
  lenguageH2.textContent = "Developed with:";

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("iconContainer");

  const iconContainerJavascript = document.createElement("picture");
  iconContainerJavascript.classList.add("iconsHero");
  const iconJavascript = document.createElement("img");
  iconJavascript.classList.add("iconJavascript");
  iconJavascript.setAttribute("src", iconPath.JAVASCRIPT);
  iconJavascript.setAttribute("alt", "icono javascript");

  const iconContainerCss = document.createElement("picture");
  iconContainerCss.classList.add("iconsHero");
  const iconCss = document.createElement("img");
  iconCss.setAttribute("src", iconPath.CSS);
  iconCss.setAttribute("alt", "icono css");

  const iconContainerSaas = document.createElement("picture");
  iconContainerSaas.classList.add("iconsHero");
  const iconSass = document.createElement("img");
  iconSass.setAttribute("src", iconPath.SASS);
  iconSass.setAttribute("alt", "icono sass");

  const iconContainerHtml = document.createElement("picture");
  iconContainerHtml.classList.add("iconsHero");
  const iconHtml = document.createElement("img");
  iconHtml.setAttribute("src", iconPath.HTML);
  iconHtml.setAttribute("alt", "icono html");

  const rangeAndPercentageContainer = document.createElement("div");
  rangeAndPercentageContainer.classList.add("rangeAndPercentageContainer");

  const rangeContainer = document.createElement("div");
  rangeContainer.classList.add("rangeContainer");

  const percentageJavascript = document.createElement("div");
  percentageJavascript.classList.add("percentageJavascript");
  const percentageCss = document.createElement("div");
  percentageCss.classList.add("percentageCss");
  const percentageSass = document.createElement("div");
  percentageSass.classList.add("percentageSass");
  const percentageHtml = document.createElement("div");
  percentageHtml.classList.add("percentageHtml");

  const percentageLenguageContainer = document.createElement("div");
  percentageLenguageContainer.classList.add("percentageLenguageContainer");

  const firstLineLenguage = document.createElement("div");
  firstLineLenguage.classList.add("rowLenguage");
  const lenguagePercentageJs = document.createElement("div");
  lenguagePercentageJs.classList.add("lenguage");
  const dotJs = document.createElement("span");
  dotJs.classList.add("bi", "bi-circle-fill", "dotJs");
  const spanJs = document.createElement("span");
  spanJs.textContent = "JavaScript ";
  const spanJsPercentage = document.createElement("span");
  spanJsPercentage.classList.add("percentage");
  spanJsPercentage.textContent = "60%";

  const lenguagePercentageCss = document.createElement("div");
  lenguagePercentageCss.classList.add("lenguage");
  const dotCss = document.createElement("span");
  dotCss.classList.add("bi", "bi-circle-fill", "dotCss");
  const spanCss = document.createElement("span");
  spanCss.textContent = "CSS";
  const spanCssPercentage = document.createElement("span");
  spanCssPercentage.classList.add("percentage");
  spanCssPercentage.textContent = "18.7%";

  const secondLineLenguage = document.createElement("div");
  secondLineLenguage.classList.add("rowLenguage");
  const lenguagePercentageSass = document.createElement("div");
  lenguagePercentageSass.classList.add("lenguage");
  const dotSass = document.createElement("span");
  dotSass.classList.add("bi", "bi-circle-fill", "dotSass");
  const spanSass = document.createElement("span");
  spanSass.textContent = "SASS";
  const spanSassPercentage = document.createElement("span");
  spanSassPercentage.classList.add("percentage");
  spanSassPercentage.textContent = "18.2%";

  const lenguagePercentageHtml = document.createElement("div");
  lenguagePercentageHtml.classList.add("lenguage");
  const dotHtml = document.createElement("span");
  dotHtml.classList.add("bi", "bi-circle-fill", "dotHtml");
  const spanHtml = document.createElement("span");
  spanHtml.textContent = "HTML";
  const spanHtmlPercentage = document.createElement("span");
  spanHtmlPercentage.classList.add("percentage");
  spanHtmlPercentage.textContent = "3.1%";

  percentageLenguageContainer.appendChild(firstLineLenguage);
  firstLineLenguage.appendChild(lenguagePercentageJs);
  lenguagePercentageJs.appendChild(dotJs);
  lenguagePercentageJs.appendChild(spanJs);
  lenguagePercentageJs.appendChild(spanJsPercentage);
  firstLineLenguage.appendChild(lenguagePercentageCss);
  lenguagePercentageCss.appendChild(dotCss);
  lenguagePercentageCss.appendChild(spanCss);
  lenguagePercentageCss.appendChild(spanCssPercentage);
  percentageLenguageContainer.appendChild(secondLineLenguage);
  secondLineLenguage.appendChild(lenguagePercentageSass);
  lenguagePercentageSass.appendChild(dotSass);
  lenguagePercentageSass.appendChild(spanSass);
  lenguagePercentageSass.appendChild(spanSassPercentage);
  secondLineLenguage.appendChild(lenguagePercentageHtml);
  lenguagePercentageHtml.appendChild(dotHtml);
  lenguagePercentageHtml.appendChild(spanHtml);
  lenguagePercentageHtml.appendChild(spanHtmlPercentage);

  containerLenguage.appendChild(lenguageH2);
  containerLenguage.appendChild(iconContainer);
  iconContainer.appendChild(iconContainerJavascript);
  iconContainerJavascript.appendChild(iconJavascript);
  iconContainer.appendChild(iconContainerCss);
  iconContainerCss.appendChild(iconCss);
  iconContainer.appendChild(iconContainerSaas);
  iconContainerSaas.appendChild(iconSass);
  iconContainer.appendChild(iconContainerHtml);
  iconContainerHtml.appendChild(iconHtml);
  containerLenguage.appendChild(rangeAndPercentageContainer);
  rangeAndPercentageContainer.appendChild(rangeContainer);
  rangeContainer.appendChild(percentageJavascript);
  rangeContainer.appendChild(percentageCss);
  rangeContainer.appendChild(percentageSass);
  rangeContainer.appendChild(percentageHtml);
  rangeAndPercentageContainer.appendChild(percentageLenguageContainer);

  nodo.appendChild(containerLenguage);
};

export { renderDeveloped };

import { iconPath } from "../../assetsPath/assetsPath.js";

const htmlIcon = iconPath.HTML;
const cssIcon = iconPath.CSS;
const jsIcon = iconPath.JAVASCRIPT;

const playGroundRender = () => {
  const path = document.getElementById("rootPath");
  path.textContent = "Portfolio > PlayGround > playGround.js";

  const miNodo = document.createElement("div");
  miNodo.classList.add("playGroundGrid");

  const miNodoHtml = document.createElement("div");
  miNodoHtml.classList.add("htmlStyle");
  const miNodoHtmlTitle = document.createElement("div");
  miNodoHtmlTitle.classList.add("htmlTitle");
  const miNodoHtmlIcon = document.createElement("img");
  miNodoHtmlIcon.setAttribute("src", htmlIcon);
  const miNodoHtmlP = document.createElement("p");
  miNodoHtmlP.textContent = "Html";
  const miNodoHtmlArea = document.createElement("textarea");
  miNodoHtmlArea.classList.add("htmlArea");
  miNodoHtmlArea.setAttribute("id", "htmlCode");
  miNodoHtmlArea.textContent = `<div class="button-container">\n<button onclick="changeColorCounter(this)">Click Me!</button>\n<p id="counter"></p>\n</div>`;

  const miNodoCss = document.createElement("div");
  miNodoCss.classList.add("cssStyle");
  const miNodoCssTitle = document.createElement("div");
  miNodoCssTitle.classList.add("cssTitle");
  const miNodoCssIcon = document.createElement("img");
  miNodoCssIcon.setAttribute("src", cssIcon);
  const miNodoCssP = document.createElement("p");
  miNodoCssP.textContent = "Css";
  const miNodoCssArea = document.createElement("textarea");
  miNodoCssArea.classList.add("cssArea");
  miNodoCssArea.setAttribute("id", "cssCode");
  miNodoCssArea.textContent = `.button-container{\ndisplay:flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nheight: 100%;\nwidth: 100%;\nbackground:#343746;\n}\n\nbutton{\npadding:20px;\nfont-size:20px;\nbackground:#FF0000;\ncolor:#fff;\nborder-radius: 10%;\n}\n\np{\ncolor:#fff;\nfont-size:20px;\nheight:20px;\nmargin-block-start: 1rem;\nmargin-block-end: 1rem;\n}`;

  const miNodoJavaScript = document.createElement("div");
  miNodoJavaScript.classList.add("javaScriptStyle");
  const miNodoJavaScriptTitle = document.createElement("div");
  miNodoJavaScriptTitle.classList.add("javaScriptTitle");
  const miNodoJavaScriptIcon = document.createElement("img");
  miNodoJavaScriptIcon.setAttribute("src", jsIcon);
  const miNodoJavaScriptP = document.createElement("p");
  miNodoJavaScriptP.textContent = "JavaScript";
  const miNodoJavaScriptArea = document.createElement("textarea");
  miNodoJavaScriptArea.classList.add("javaScriptArea");
  miNodoJavaScriptArea.setAttribute("id", "javaScriptCode");
  miNodoJavaScriptArea.textContent = `let clickCounter = 0\n\nfunction changeColorCounter(x){\nlet currentColor = x.style.background;\n\nx.style.background = currentColor === 'rgb(0, 0, 255)' ? '#FF0000' : '#0000FF';\n\nclickCounter++;\n\nconst counter = document.getElementById("counter");\ncounter.innerText =\`Counter: \${clickCounter}\`;\n}`;

  const miNodoOutPutArea = document.createElement("div");
  miNodoOutPutArea.classList.add("outPutArea");
  const miNodoIframe = document.createElement("iframe");
  miNodoIframe.setAttribute("id", "outPut");

  miNodo.appendChild(miNodoHtml);
  miNodoHtml.appendChild(miNodoHtmlTitle);
  miNodoHtmlTitle.appendChild(miNodoHtmlIcon);
  miNodoHtmlTitle.appendChild(miNodoHtmlP);
  miNodoHtml.appendChild(miNodoHtmlArea);

  miNodo.appendChild(miNodoCss);
  miNodoCss.appendChild(miNodoCssTitle);
  miNodoCssTitle.appendChild(miNodoCssIcon);
  miNodoCssTitle.appendChild(miNodoCssP);
  miNodoCss.appendChild(miNodoCssArea);

  miNodo.appendChild(miNodoJavaScript);
  miNodoJavaScript.appendChild(miNodoJavaScriptTitle);
  miNodoJavaScriptTitle.appendChild(miNodoJavaScriptIcon);
  miNodoJavaScriptTitle.appendChild(miNodoJavaScriptP);
  miNodoJavaScript.appendChild(miNodoJavaScriptArea);

  miNodo.appendChild(miNodoOutPutArea);
  miNodoOutPutArea.appendChild(miNodoIframe);
  mainView.appendChild(miNodo);

  const html = document.getElementById("htmlCode");
  html.addEventListener("keyup", run);
  const css = document.getElementById("cssCode");
  css.addEventListener("keyup", run);
  const javaScript = document.getElementById("javaScriptCode");
  javaScript.addEventListener("keyup", run);
  const outPut = document.getElementById("outPut");

  function run() {
    outPut.contentDocument.body.innerHTML =
      html.value + "<style>" + css.value + "</style>";
    outPut.contentWindow.eval(javaScript.value);
  }

  run();
};

export { playGroundRender };

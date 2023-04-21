const playGroundRender = () => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";
  mainArea.style.gridTemplateAreas = `
  "tabs tabs tabs"
  "rootPath rootPath rootPath"
  "mainView mainView mainView"
  `;
  const path = document.getElementById("rootPath");
  path.style.display = "flex";
  path.textContent = "Portfolio > PlayGround > playGround.js";

  const miNodo = document.createElement("div");
  miNodo.classList.add("playGroundGrid");

  const miNodoHtml = document.createElement("div");
  miNodoHtml.classList.add("html");
  const miNodoHtmlTitle = document.createElement("div");
  miNodoHtmlTitle.classList.add("htmlTitle");
  miNodoHtmlTitle.textContent = "Html";
  const miNodoHtmlArea = document.createElement("textarea");
  miNodoHtmlArea.classList.add("htmlArea");
  miNodoHtmlArea.setAttribute("id", "htmlCode");

  const miNodoCss = document.createElement("div");
  miNodoCss.classList.add("css");
  const miNodoCssTitle = document.createElement("div");
  miNodoCssTitle.classList.add("cssTitle");
  miNodoCssTitle.textContent = "Css";
  const miNodoCssArea = document.createElement("textarea");
  miNodoCssArea.classList.add("cssArea");
  miNodoCssArea.setAttribute("id", "cssCode");

  const miNodoJavaScript = document.createElement("div");
  miNodoJavaScript.classList.add("javaScript");
  const miNodoJavaScriptTitle = document.createElement("div");
  miNodoJavaScriptTitle.classList.add("javaScriptTitle");
  miNodoJavaScriptTitle.textContent = "JavaScript";
  const miNodoJavaScriptArea = document.createElement("textarea");
  miNodoJavaScriptArea.classList.add("javaScriptArea");
  miNodoJavaScriptArea.setAttribute("id", "javaScriptCode");

  const miNodoOutPutArea = document.createElement("div");
  miNodoOutPutArea.classList.add("outPutArea");
  const miNodoIframe = document.createElement("iframe");
  miNodoIframe.setAttribute("id", "outPut");

  miNodo.appendChild(miNodoHtml);
  miNodoHtml.appendChild(miNodoHtmlTitle);
  miNodoHtml.appendChild(miNodoHtmlArea);
  miNodo.appendChild(miNodoCss);
  miNodoCss.appendChild(miNodoCssTitle);
  miNodoCss.appendChild(miNodoCssArea);
  miNodo.appendChild(miNodoJavaScript);
  miNodoJavaScript.appendChild(miNodoJavaScriptTitle);
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
};

export { playGroundRender };

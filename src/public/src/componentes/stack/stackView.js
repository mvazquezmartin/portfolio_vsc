const stackView = (stack) => {
  const stackArray = Array.isArray(stack) ? stack : [stack];
  stackArray.forEach((stack) => {
    //path
    rootPath.textContent = stack.path;
    //estructura
    const miNodo = document.createElement("div");
    miNodo.classList.add("stackViewTabs");
    //stack title conteiner
    const miNodoStackTitle = document.createElement("div");
    miNodoStackTitle.classList.add("stackTitleView");
    const miNodoStackH2 = document.createElement("h2");
    miNodoStackH2.textContent = stack.title;
    //stack description
    const miNodoDescription = document.createElement("div");
    miNodoDescription.classList.add("stackDescriptionView");
    const miNodoTextDescription = document.createElement("p");
    miNodoTextDescription.textContent = stack.shortDescription;
    //stack link certificado
    const miNodoLinkCertificado = document.createElement("a");
    miNodoLinkCertificado.classList.add("stackLinkCoder");
    miNodoLinkCertificado.setAttribute("href", stack.linkCertificado);
    miNodoLinkCertificado.setAttribute("target", "_blank");
    miNodoLinkCertificado.textContent = "Link CoderHouse";
    //stack certificado
    const miNodoCertificadoDiv = document.createElement("div");
    miNodoCertificadoDiv.classList.add("stackCertificado");
    const miNodoCertificado = document.createElement("img");
    miNodoCertificado.setAttribute("src", stack.certificado);
    miNodoCertificado.setAttribute("alt", stack.title);
    //insert Nodo
    miNodo.appendChild(miNodoStackTitle);
    miNodoStackTitle.appendChild(miNodoStackH2);
    miNodo.appendChild(miNodoDescription);
    miNodoDescription.appendChild(miNodoTextDescription);
    miNodo.appendChild(miNodoCertificadoDiv);
    miNodoCertificadoDiv.appendChild(miNodoCertificado);
    miNodo.appendChild(miNodoLinkCertificado)
    mainView.appendChild(miNodo);
  });
};

export { stackView };

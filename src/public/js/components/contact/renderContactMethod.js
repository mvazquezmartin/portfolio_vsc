const renderContactMethod = (method, nodo) => {
  const methodLineContainer = document.createElement("div");
  methodLineContainer.classList.add("methodLineContainer");

  const contactMethod = document.createElement("span");
  contactMethod.classList.add("contactMethod");
  contactMethod.textContent = '"' + method.method + '"';

  const doubleDot = document.createElement("span");
  doubleDot.classList.add("doubleDot");
  doubleDot.textContent = ":";

  const linkContainer = document.createElement("span");
  linkContainer.classList.add("linkContainer");

  const link = document.createElement("a");
  link.setAttribute("href", method.link);
  link.setAttribute("target", "_blank");
  link.textContent = '"' + method.data + '"' + ",";

  methodLineContainer.appendChild(contactMethod);
  methodLineContainer.appendChild(doubleDot);
  methodLineContainer.appendChild(linkContainer);
  linkContainer.appendChild(link);
  nodo.appendChild(methodLineContainer);
};

export { renderContactMethod };

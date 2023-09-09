const renderContactForm = (nodo) => {
  const formContactContainer = document.createElement("div");
  formContactContainer.classList.add("formContactContainer");

  const formTitle = document.createElement("div");
  formTitle.classList.add("formTitle");
  formTitle.textContent = "O complete este formulario...";

  const formContainer = document.createElement("form");
  formContainer.setAttribute("id", "formContact");

  const nameAndEmailContainer = document.createElement("div");
  nameAndEmailContainer.classList.add("nameAndEmailContainer");

  const nameContainer = document.createElement("div");
  nameContainer.classList.add("nameAndEmail");

  const emailContainer = document.createElement("div");
  emailContainer.classList.add("nameAndEmail");

  const labelName = document.createElement("label");
  labelName.setAttribute("for", "name");
  labelName.textContent = "NOMBRE";
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("id", "inputName");
  inputName.setAttribute("required", "true");

  const labelEmail = document.createElement("label");
  labelEmail.setAttribute("for", "email");
  labelEmail.textContent = "EMAIL";
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("id", "inputEmail");
  inputEmail.setAttribute("required", "true");

  const labelSubject = document.createElement("label");
  labelSubject.setAttribute("for", "subject");
  labelSubject.textContent = "ASUNTO";
  const inputSubject = document.createElement("input");
  inputSubject.setAttribute("type", "text");
  inputSubject.setAttribute("name", "subject");
  inputSubject.setAttribute("id", "inputSubject");
  inputSubject.setAttribute("required", "true")

  const labelMessage = document.createElement("label");
  labelMessage.setAttribute("for", "message");
  labelMessage.textContent = "MENSAJE";
  const inputMessage = document.createElement("textarea");
  inputMessage.setAttribute("type", "text");
  inputMessage.setAttribute("name", "message");
  inputMessage.setAttribute("id", "inputMessage");
  inputMessage.setAttribute("required", "true")

  const inputSubmit = document.createElement("button");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("value", "Enviar");
  inputSubmit.textContent = "ENVIAR";

  formContactContainer.appendChild(formTitle);
  formContactContainer.appendChild(formContainer);
  formContainer.appendChild(nameAndEmailContainer);
  nameContainer.appendChild(labelName);
  nameContainer.appendChild(inputName);
  emailContainer.appendChild(labelEmail);
  emailContainer.appendChild(inputEmail);
  nameAndEmailContainer.appendChild(nameContainer);
  nameAndEmailContainer.appendChild(emailContainer);
  formContainer.appendChild(labelSubject);
  formContainer.appendChild(inputSubject);
  formContainer.appendChild(labelMessage);
  formContainer.appendChild(inputMessage);
  formContainer.appendChild(inputSubmit);
  nodo.appendChild(formContactContainer);
};

export { renderContactForm };

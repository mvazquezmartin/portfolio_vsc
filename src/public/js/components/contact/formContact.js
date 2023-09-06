const renderContactForm = (nodo) => {
  const formContainer = document.createElement("form");
  formContainer.setAttribute("id", "formContact");

  const labelName = document.createElement("label");
  labelName.setAttribute("for", "name");
  labelName.textContent = "Nombre";
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("id", "inputName");

  const labelEmail = document.createElement("label");
  labelEmail.setAttribute("for", "email");
  labelEmail.textContent = "Email";
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("id", "inputEmail");

  const labelSubject = document.createElement("label");
  labelSubject.setAttribute("for", "subject");
  labelSubject.textContent = "Asunto";
  const inputSubject = document.createElement("input");
  inputSubject.setAttribute("type", "text");
  inputSubject.setAttribute("name", "subject");
  inputSubject.setAttribute("id", "inputSubject");

  const labelMessage = document.createElement("label");
  labelMessage.setAttribute("for", "message");
  labelMessage.textContent = "Mensaje:";
  const inputMessage = document.createElement("input");
  inputMessage.setAttribute("type", "text");
  inputMessage.setAttribute("name", "message");
  inputMessage.setAttribute("id", "inputMessage");

  const inputSubmit = document.createElement("input");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("value", "Enviar");

  formContainer.appendChild(labelName);
  formContainer.appendChild(inputName);
  formContainer.appendChild(labelEmail);
  formContainer.appendChild(inputEmail);
  formContainer.appendChild(labelSubject);
  formContainer.appendChild(inputSubject);
  formContainer.appendChild(labelMessage);
  formContainer.appendChild(inputMessage);
  formContainer.appendChild(inputSubmit);
  nodo.appendChild(formContainer);
};

export { renderContactForm };

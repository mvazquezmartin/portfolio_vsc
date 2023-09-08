import { contactMethod } from "./contacObj.js";
import { renderContactForm } from "./formContact.js";
import { renderContactMethod } from "./renderContactMethod.js";

const renderMainContact = () => {
  const path = document.getElementById("rootPath");
  path.textContent = "MVazquezMartin > Contact";

  const mainContactContainer = document.createElement("div");
  mainContactContainer.classList.add("mainContactContainer");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");

  const openSquareBracketsContainer = document.createElement("div");
  openSquareBracketsContainer.classList.add("squareBrackets");
  openSquareBracketsContainer.textContent = "[";

  const openBrackets = document.createElement("div");
  openBrackets.classList.add("brackets");
  openBrackets.textContent = "{";

  const closeBrackets = document.createElement("div");
  closeBrackets.classList.add("brackets");
  closeBrackets.textContent = "},";

  const contactMethodContainer = document.createElement("div");
  contactMethodContainer.classList.add("contactMethodContainer");

  contactMethod.forEach((method) => {
    renderContactMethod(method, contactMethodContainer);
  });

  const closeSquareBracketsContainer = document.createElement("div");
  closeSquareBracketsContainer.classList.add("squareBrackets");
  closeSquareBracketsContainer.textContent = "],";

  mainContactContainer.appendChild(contactContainer);
  contactContainer.appendChild(openSquareBracketsContainer);
  contactContainer.appendChild(openBrackets);
  contactContainer.appendChild(contactMethodContainer);
  contactContainer.appendChild(closeBrackets);
  contactContainer.appendChild(closeSquareBracketsContainer);

  renderContactForm(mainContactContainer);

  mainView.appendChild(mainContactContainer);
};

export { renderMainContact };

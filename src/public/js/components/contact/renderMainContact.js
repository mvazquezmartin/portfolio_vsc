import { contactMethod } from "./contacObj.js";
import { renderContactForm } from "./formContact.js";
import { renderContactMethod } from "./renderContactMethod.js";
import { post } from "./fetch.post.js";

const renderMainContact = () => {
  const path = document.getElementById("rootPath");
  path.textContent = "MVazquezMartin > Contact";

  const mainContactContainer = document.createElement("div");
  mainContactContainer.classList.add("mainContactContainer");

  const contactSocialContainer = document.createElement("div");
  contactSocialContainer.classList.add("contactSocialContainer");

  const contactSocialTitle = document.createElement("div");
  contactSocialTitle.classList.add("socialTitle");
  contactSocialTitle.textContent = "Comuníquese a través de las redes sociales";

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");

  const openSquareBracketsContainer = document.createElement("div");
  openSquareBracketsContainer.classList.add("squareBrackets");
  openSquareBracketsContainer.textContent = "[";

  const openBracketsObj = document.createElement("div");
  openBracketsObj.classList.add("bracketObj");
  openBracketsObj.textContent = "{";

  const openBrackets = document.createElement("div");
  openBrackets.classList.add("brackets");
  openBrackets.textContent = "{";

  const socialDiv = document.createElement("div");
  socialDiv.classList.add("socialDiv");
  const socialSpan = document.createElement("span");
  socialSpan.classList.add("socialSpan");
  socialSpan.textContent = '"socials"';
  const socialDoubleDot = document.createElement("span");
  socialDoubleDot.classList.add("socialDoubleDot");
  socialDoubleDot.textContent = ":";

  const closeBrackets = document.createElement("div");
  closeBrackets.classList.add("brackets");
  closeBrackets.textContent = "}";

  const closeBracketsObj = document.createElement("div");
  closeBracketsObj.classList.add("bracketObj");
  closeBracketsObj.textContent = "},";

  const contactMethodContainer = document.createElement("div");
  contactMethodContainer.classList.add("contactMethodContainer");

  contactMethod.forEach((method) => {
    renderContactMethod(method, contactMethodContainer);
  });

  const closeSquareBracketsContainer = document.createElement("div");
  closeSquareBracketsContainer.classList.add("squareBrackets");
  closeSquareBracketsContainer.textContent = "],";

  mainContactContainer.appendChild(contactSocialContainer);
  contactSocialContainer.appendChild(contactSocialTitle);
  contactSocialContainer.appendChild(contactContainer);
  contactContainer.appendChild(openSquareBracketsContainer);
  contactContainer.appendChild(openBracketsObj);
  contactContainer.appendChild(socialDiv);
  socialDiv.appendChild(socialSpan);
  socialDiv.appendChild(socialDoubleDot);
  contactContainer.appendChild(openBrackets);
  contactContainer.appendChild(contactMethodContainer);
  contactContainer.appendChild(closeBrackets);
  contactContainer.appendChild(closeBracketsObj);
  contactContainer.appendChild(closeSquareBracketsContainer);

  renderContactForm(mainContactContainer);

  mainView.appendChild(mainContactContainer);

  post();
};

export { renderMainContact };

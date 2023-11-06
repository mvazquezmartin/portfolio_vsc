import { pdfPath } from "../../assetsPath/assetsPath.js";

const renderAccount = () => {
  const path = document.getElementById("rootPath");
  path.textContent = "Account > Main Account";

  const containerAccount = document.createElement("div");
  containerAccount.classList.add("containerAccount");

  const btnDonwload = document.createElement("a");
  btnDonwload.href = pdfPath.CV_ESP;
  btnDonwload.download = "cv_mvazquezmartin.pdf";
  btnDonwload.textContent = "Download";

  const containerAboutMeAndEducation = document.createElement("div");

  const containerAboutMe = document.createElement("div");
  const titleAboutMe = document.createElement("h1");
  titleAboutMe.textContent = "Sobre Mi";
  const aboutMeP1 = document.createElement("p");
  aboutMeP1.textContent = `Soy un apasionado de la tecnología desde chico. Comencé mi camino en el mundo de la computación a partir de la época de Windows
  3.1,y desde entonces he estado aprendiendo y solucionando problemas relacionados con la informática.`;
  const aboutMeP2 = document.createElement("p");
  aboutMeP2.textContent = `Mi objetivo final es poder desarrollar una aplicación completa que resuelva problemas del mundo real y sea útil para la comunidad.
  Creo que el software es una herramienta poderosa para ayudar a resolver problemas cotidianos.`;

  const containerEducation = document.createElement("div");
  const titleEducation = document.createElement("h2");
  titleEducation.textContent = "Formación";

  const containerEducationCard = document.createElement("div");
  const titleCareer = document.createElement("p");
  titleCareer.textContent = "Carrera Full Stack";
  const yearCareer = document.createElement;

  containerAccount.appendChild(btnDonwload);
  containerAccount.appendChild(containerAboutMeAndEducation);
  containerAboutMeAndEducation.appendChild(containerAboutMe);
  containerAboutMe.appendChild(titleAboutMe);
  containerAboutMe.appendChild(aboutMeP1);
  containerAboutMe.appendChild(aboutMeP2);
  containerAboutMeAndEducation.appendChild(containerEducation);
  containerEducation.appendChild(titleEducation);
  mainView.appendChild(containerAccount);
};

export { renderAccount };

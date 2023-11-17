import { pdfPath } from "../../assetsPath/assetsPath.js";
import { experience, studies } from "./dataCv.js";

const cardExperienceContainer = (jobData) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainerExperience");

  const cardTitle = document.createElement("p");
  cardTitle.textContent = jobData.company;

  const job = document.createElement("p");
  job.textContent = jobData.name;

  const timeWorking = document.createElement("p");
  timeWorking.textContent = jobData.date;

  const responsibilityJob = document.createElement("div");

  const responsibilities = jobData.responsibility.split("\n");
  responsibilities.forEach((responsibility) => {
    const responsibilityParagraph = document.createElement("p");
    responsibilityParagraph.textContent = responsibility;
    responsibilityJob.appendChild(responsibilityParagraph);
  });

  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(job);
  cardContainer.appendChild(timeWorking);
  cardContainer.appendChild(responsibilityJob);

  return cardContainer;
};

const cardStudiesContainer = (studiesData) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainerStudies");

  const title = document.createElement("p");
  title.textContent = studiesData.title;

  const institution = document.createElement("p");
  institution.textContent = studiesData.institution;

  const date = document.createElement("p");
  date.textContent = studiesData.date;

  cardContainer.appendChild(title);
  cardContainer.appendChild(institution);
  cardContainer.appendChild(date);

  return cardContainer;
};

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
  titleEducation.textContent = "Experiencia:";

  containerEducation.appendChild(titleEducation);

  experience.forEach((job) => {
    containerEducation.appendChild(cardExperienceContainer(job));
  });

  studies.forEach((studies) => {
    containerEducation.appendChild(cardStudiesContainer(studies));
  });

  containerAccount.appendChild(btnDonwload);
  containerAccount.appendChild(containerAboutMeAndEducation);
  containerAboutMeAndEducation.appendChild(containerAboutMe);
  containerAboutMe.appendChild(titleAboutMe);
  containerAboutMe.appendChild(aboutMeP1);
  containerAboutMe.appendChild(aboutMeP2);
  containerAboutMeAndEducation.appendChild(containerEducation);
  mainView.appendChild(containerAccount);
};

export { renderAccount };

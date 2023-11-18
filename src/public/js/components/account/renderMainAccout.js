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
  btnDonwload.textContent = "Download CV";
  btnDonwload.classList.add("btnDownload");

  const containerAboutMe = document.createElement("div");
  containerAboutMe.classList.add("containerAboutMe");
  const titleAboutMe = document.createElement("h1");
  titleAboutMe.textContent = "Sobre mi";
  const aboutMeP1 = document.createElement("p");
  aboutMeP1.textContent = `Soy un apasionado de la tecnología desde chico. Comencé mi camino en el mundo de la computación a partir de la época de Windows
  3.1,y desde entonces he estado aprendiendo y solucionando problemas relacionados con la informática.`;
  const aboutMeP2 = document.createElement("p");
  aboutMeP2.textContent = `Mi objetivo es desarrollar una aplicación completa que tenga un impacto real al resolver problemas comunes y beneficiar a la comunidad. Estoy convencido de que el software es una herramienta poderosa para abordar desafíos del día a día.`;

  const containerExperienceAndStudies = document.createElement("div");
  containerExperienceAndStudies.classList.add("experienceAndStudies");

  const containerExperience = document.createElement("div");
  containerExperience.classList.add("containerExperience");
  const titleExperience = document.createElement("h2");
  titleExperience.textContent = "Experiencia";

  containerExperience.appendChild(titleExperience);

  experience.forEach((job) => {
    containerExperience.appendChild(cardExperienceContainer(job));
  });

  const containerStudies = document.createElement("div");
  containerStudies.classList.add("containerStudies");
  const titleStudies = document.createElement("h2");
  titleStudies.textContent = "Estudios";

  containerStudies.appendChild(titleStudies);

  studies.forEach((studies) => {
    containerStudies.appendChild(cardStudiesContainer(studies));
  });

  containerAccount.appendChild(btnDonwload);
  containerAccount.appendChild(containerAboutMe);
  containerAboutMe.appendChild(titleAboutMe);
  containerAboutMe.appendChild(aboutMeP1);
  containerAboutMe.appendChild(aboutMeP2);
  containerAccount.appendChild(containerExperienceAndStudies);
  containerExperienceAndStudies.appendChild(containerExperience);
  containerExperienceAndStudies.appendChild(containerStudies);
  mainView.appendChild(containerAccount);
};

export { renderAccount };

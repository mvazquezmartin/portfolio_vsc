const renderAccount = () => {
  const path = document.getElementById("rootPath");
  path.textContent = "Account > Main Account";

  const containerAccount = document.createElement("div");
  containerAccount.classList.add("containerAccount");

  const containerAboutMeAndEducation = document.createElement("div");

  const containerAboutMe = document.createElement("div");
  const titleAboutMe = document.createElement("h1");
  titleAboutMe.textContent = "Sobre Mi";
  const aboutMeP1 = document.createElement("p");
  aboutMeP1.textContent = `Soy un apasionado de la tecnología desde chico. Comencé mi camino en el mundo de la informática a partir de la época de Windows
  3.1,y desde entonces he estado aprendiendo y solucionando problemas relacionados con la informática.`;
  const aboutMeP2 = document.createElement("p");
  aboutMeP2.textContent = `Actualmente, estoy enfocado en convertirme en un desarrollador full stack, aunque tengo preferencias por el backend. Estoy
  estudiando constantemente y trabajando en proyectos personales para mejorar mis habilidades en el desarrollo web y la
  programación.`;
  const aboutMeP3 = document.createElement("p");
  aboutMeP3.textContent = `Mi objetivo nal es poder desarrollar una aplicación completa que resuelva problemas del mundo real y sea útil para la comunidad.
  Creo que el software es una herramienta poderosa para ayudar a resolver problemas cotidianos.`;

  const containerEducation = document.createElement("div");
  const titleEducation = document.createElement("h2");
  titleEducation.textContent = "Formación";

  const containerEducationCard = document.createElement("div");
  const titleCareer = document.createElement("p");
  titleCareer.textContent = "Carrera Full Stack"
  const yearCareer = document.createElement

  containerAccount.appendChild(containerAboutMeAndEducation);
  containerAboutMeAndEducation.appendChild(containerAboutMe);
  containerAboutMe.appendChild(titleAboutMe);
  containerAboutMe.appendChild(aboutMeP1);
  containerAboutMe.appendChild(aboutMeP2);
  containerAboutMe.appendChild(aboutMeP3);
  containerAboutMeAndEducation.appendChild(containerEducation);
  containerEducation.appendChild(titleEducation);
  mainView.appendChild(containerAccount);
};

export { renderAccount };

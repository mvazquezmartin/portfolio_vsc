import { responsive } from "../responsive.js";

responsive.BREAKPOINT_MOBILE;

// Función para cambiar el texto del elemento 'titleVSC' según el breakpoint
const mobileResponsive = () => {
  const titleElement = document.querySelector(".titleVSC");
  const menu = document.querySelector(".menuIconContainer");
  const navBarAside = document.getElementById("navBarAside");
  const sideBar = document.getElementById("sideBar");
  const sideBarIcon = document.getElementsByClassName("iconNavBarAside");

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  let statusSideBar = {
    pre: "",
    now: "",
  };

  if (isMobile) {
    titleElement.textContent = "MvM Dev - Visual Studio Code";
  } else {
    titleElement.textContent = "Matias Vazquez Martin - Visual Studio Code";
  }

  const closeMenu = () => {
    navBarAside.classList.remove("navBarAsideRes");
    sideBar.classList.remove("sideBarRes");
  };

  menu.addEventListener("click", () => {
    navBarAside.classList.toggle("navBarAsideRes");
    sideBar.classList.remove("sideBarRes");
  });

  for (const icon of sideBarIcon) {
    icon.addEventListener("click", () => {
      statusSideBar.pre = icon.id;

      if (statusSideBar.pre !== statusSideBar.now) {
        sideBar.classList.add("sideBarRes");
      } else if (statusSideBar.pre === statusSideBar.now) {
        sideBar.classList.toggle("sideBarRes");
      }

      statusSideBar.now = icon.id;
    });
  }

  document.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (
      !targetElement.closest(".menuIconContainer") &&
      !targetElement.closest("#navBarAside") &&
      !targetElement.closest("#sideBar")
    ) {
      closeMenu();
    }
  });
};

export { mobileResponsive };

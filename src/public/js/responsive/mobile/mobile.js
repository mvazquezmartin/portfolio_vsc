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

  if (isMobile) {
    titleElement.textContent = "MvM Dev - Visual Studio Code";
  } else {
    titleElement.textContent = "Matias Vazquez Martin - Visual Studio Code";
  }

  // const removeSideBarResFromIcons = () => {
  //   for (const icon of sideBarIcon) {
  //     icon.classList.remove("sideBarRes");
  //   }
  // };

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
      console.log(icon.classList.contains("active"))
      if (icon.classList.contains("active")) {
        icon.classList.toggle("sideBarRes");
      }else{
        icon.classList.add("sideBarRes");
      }
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

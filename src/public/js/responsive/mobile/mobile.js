// Función para cambiar el texto del elemento 'titleVSC' según el breakpoint
const mobileResponsive = () => {
  const titleElement = document.querySelector(".titleVSC");
  const menu = document.getElementById("menu-icon");
  const navBarAside = document.getElementById("navBarAside");
  const sideBar = document.getElementById("sideBar");
  const sideBarIcon = document.getElementsByClassName("iconNavBarAside");

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  let statusSideBar = {
    now: "",
    pre: "",
  };

  if (isMobile) {
    titleElement.textContent = "MvM Dev - Visual Studio Code";
  } else {
    titleElement.textContent = "Matias Vazquez Martin - Visual Studio Code";
  }

  const closeMenu = () => {
    const removeClasses = () => {
      navBarAside.classList.remove("navBarAsideRes");
      menu.classList.remove("close");
      for (const icon of sideBarIcon) {
        icon.classList.remove("active");
      }
    };

    if (!sideBar.classList.contains("sideBarRes")) {
      removeClasses();
    }

    sideBar.classList.remove("sideBarRes");
    setTimeout(() => {
      removeClasses();
    }, 500);
  };

  menu.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("close");
    sideBar.classList.remove("sideBarRes");
    navBarAside.classList.toggle("navBarAsideRes");
    for (const icon of sideBarIcon) {
      icon.classList.remove("active");
    }
  });

  // CAPTURAR ID DEL ELEMENTO README AND CONTACT
  for (const icon of sideBarIcon) {
    if (
      icon.id !== "readme" &&
      icon.id !== "contact" &&
      icon.id !== "account"
    ) {
      icon.addEventListener("click", () => {
        statusSideBar.now = icon.id;

        if (statusSideBar.now !== statusSideBar.pre) {
          sideBar.classList.add("sideBarRes");
        } else if (statusSideBar.now === statusSideBar.pre) {
          sideBar.classList.toggle("sideBarRes");
        }

        statusSideBar.pre = icon.id;
      });
    } else {
      icon.addEventListener("click", () => {
        sideBar.classList.remove("sideBarRes");
      });
    }
  }

  document.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (
      !targetElement.closest("#menu-icon") &&
      !targetElement.closest("#navBarAside") &&
      !targetElement.closest("#sideBar")
    ) {
      closeMenu();
    }
  });
};

export { mobileResponsive };

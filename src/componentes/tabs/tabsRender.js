const closeX = './assets/close-sm-svgrepo-com.svg'

const tabs = [];
let activeTabIndex = -1; // Índice de la pestaña activa

// Función para crear una nueva pestaña o activar una existente
function createTab(title, content, icon) {
  const existingTabIndex = tabs.findIndex((tab) => tab.title === title);
  if (existingTabIndex !== -1) {
    setActiveTab(existingTabIndex); // Establecer la pestaña existente como activa
  } else {
    const tab = {
      title: title,
      content: content,
      icon: icon,
      open: true,
      close: closeX
    };
    tabs.push(tab);
    setActiveTab(tabs.length - 1); // Establecer la pestaña creada como activa
  }
  renderTabs();
  renderMainView();
  activeTabFocus();
}

function renderTabs() {
  const tabsContainer = document.getElementById("tabs");
  tabsContainer.innerHTML = "";

  tabs.forEach((tab, index) => {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");

    const tabIcon = document.createElement("img");
    tabIcon.setAttribute("src", tab.icon);
    tabIcon.classList.add("iconTab")

    const tabElement = document.createElement("button");
    tabElement.classList.add("tabButton");
    tabElement.textContent = tab.title;

    // Asignar evento de clic para cambiar la pestaña activa
    tabElement.addEventListener("click", () => {
      setActiveTab(index);
    });

    // Agregar botón de cierre en cada pestaña
    const closeButton = document.createElement("img");
    closeButton.setAttribute("src", tab.close)
    closeButton.classList.add("closeButton");
    

    // Asignar evento de clic para cerrar la pestaña
    closeButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Evitar que el clic se propague al contenedor de pestañas
      closeTab(index);
    });

    tabDiv.appendChild(tabIcon);
    tabDiv.appendChild(tabElement);
    tabElement.appendChild(closeButton);
    tabsContainer.appendChild(tabDiv);
  });
}

// Función para cambiar la pestaña activa
function setActiveTab(index) {
  if (tabs[index] && tabs[index].open) {
    activeTabIndex = index; // Actualizar el índice de la pestaña activa
    renderTabs();
    renderMainView();
    activeTabFocus();
  }
}

function activeTabFocus() {
  const tabButtons = document.querySelectorAll(".tab");
  const activeTabButton = tabButtons[activeTabIndex];
  // Elimina la clase 'activeTab' de todos los botones de pestaña
  tabButtons.forEach((button) => {
    button.classList.remove("activeTab");
  });
  // Agrega la clase 'activeTab' al botón de la pestaña activa
  activeTabButton.classList.add("activeTab");
}

// Función para cerrar una pestaña
function closeTab(index) {
  const rootPath = document.getElementById("rootPath");
  rootPath.textContent = "";
  const mainViewContainer = document.getElementById("mainView");
  mainViewContainer.textContent = "";
  if (tabs[index]) {
    const tabToClose = tabs[index];
    const wasActiveTab = tabToClose.open && index === activeTabIndex;

    tabs.splice(index, 1);
    renderTabs();

    if (wasActiveTab) {
      const nextActiveTabIndex = tabs.findIndex((tab) => tab.open);
      setActiveTab(nextActiveTabIndex !== -1 ? nextActiveTabIndex : 0);
    } else {
      renderMainView();
    }
  }
}

// Función para renderizar el contenido en el mainView
function renderMainView() {
  const mainViewContainer = document.getElementById("mainView");
  mainViewContainer.innerHTML = "";

  if (activeTabIndex !== -1 && tabs[activeTabIndex]) {
    const activeTab = tabs[activeTabIndex];
    activeTab.content();
  }
}

export { createTab };

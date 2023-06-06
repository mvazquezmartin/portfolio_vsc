const tabs = [];
let activeTabIndex = -1; // Índice de la pestaña activa

// Función para crear una nueva pestaña o activar una existente
function createTab(title, content) {
  const existingTabIndex = tabs.findIndex((tab) => tab.title === title);
  if (existingTabIndex !== -1) {
    setActiveTab(existingTabIndex); // Establecer la pestaña existente como activa
  } else {
    const tab = {
      title: title,
      content: content,
      open: true,
    };
    tabs.push(tab);
    setActiveTab(tabs.length - 1); // Establecer la pestaña creada como activa
  }
  renderTabs();
  renderMainView();
}

function renderTabs() {
  const tabsContainer = document.getElementById("tabs");
  tabsContainer.innerHTML = "";

  tabs.forEach((tab, index) => {
    const tabElement = document.createElement("div");
    tabElement.classList.add("tab");
    tabElement.textContent = tab.title;

    // Asignar evento de clic para cambiar la pestaña activa
    tabElement.addEventListener("click", () => {
      setActiveTab(index);
    });

    // Agregar botón de cierre en cada pestaña
    const closeButton = document.createElement("span");
    closeButton.classList.add("closeButton");
    closeButton.textContent = " x ";

    // Asignar evento de clic para cerrar la pestaña
    closeButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Evitar que el clic se propague al contenedor de pestañas
      closeTab(index);
    });

    tabElement.appendChild(closeButton);
    tabsContainer.appendChild(tabElement);
  });
}

// Función para cambiar la pestaña activa
function setActiveTab(index) {
  if (tabs[index] && tabs[index].open) {
    activeTabIndex = index; // Actualizar el índice de la pestaña activa
    renderTabs();
    renderMainView();
  }
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

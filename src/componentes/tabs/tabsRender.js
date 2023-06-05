// Estructura de datos para almacenar información de las pestañas
const tabs = [];

// Función para crear una nueva pestaña
function createTab(title, content) {
  const tab = {
    title: title,
    content: content,
    pinned: false,
    open: true,
  };
  tabs.push(tab);
  renderTabs();
  renderMainView();
}

// Función para renderizar las pestañas en la barra de pestañas
function renderTabs() {
  console.log(tabs);
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

    // Asignar evento de doble clic para anclar o desanclar la pestaña
    tabElement.addEventListener("dblclick", () => {
      togglePinnedTab(index);
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
  tabs.forEach((tab, i) => {
    tab.open = i === index;
  });
  renderTabs();
  renderMainView();
}

// Función para anclar o desanclar una pestaña
function togglePinnedTab(index) {
  tabs[index].pinned = !tabs[index].pinned;
  renderTabs();
}

// Función para cerrar una pestaña
function closeTab(index) {
  tabs.splice(index, 1);
  renderTabs();
  renderMainView();
}

// Función para renderizar el contenido en el mainView
function renderMainView() {
  const mainViewContainer = document.getElementById("mainView");
  mainViewContainer.innerHTML = "";

  const activeTab = tabs.find((tab) => tab.open);
  if (activeTab) {
    const tabContent = document.createElement("div");
    const content =
      typeof activeTab.content === "function"
        ? activeTab.content()
        : activeTab.content;
    tabContent.innerHTML = content;
    mainViewContainer.appendChild(tabContent);
  }
}

export { createTab };

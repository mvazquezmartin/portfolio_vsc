
export const tabsRender = (file) => {  
    const tabs = document.getElementById("tabs");

    const miNodo = document.createElement("div");
    miNodo.classList.add("tabRender");

    const miNodoButtonClose = document.createElement("button");
    miNodoButtonClose.textContent = `${file} x`;
    miNodoButtonClose.addEventListener("click", closeTab);

    miNodo.appendChild(miNodoButtonClose);
    tabs.appendChild(miNodo);  
};

const openTab = (evento) => {
  tabs.push(evento.target.getAttribute("tabOpen"));
  tabsRender();
};

const closeTab = (e) => {
  const id = e.target.dataset.tab;
  tabsOpen = tabsOpen.filter((tabId) => {
    return tabId !== id;
  });
};

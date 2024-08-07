import { iconPath } from "../../assetsPath/assetsPath.js";
import { renderNoTabs } from "./noTabs.js";

class TabManager {
  constructor() {
    this.closeX = iconPath.CLOSE_X;
    this.tabs = [];
    this.activeTabIndex = 0;
    this.lastClickTime = 0;
    this.maxTabsMobile = 3;
    this.maxTabsDesktop = 10;
  }

  create(title, content, icon, isOpen = false) {
    const tab = {
      title: title,
      content: content,
      icon: icon,
      isOpen: isOpen,
    };

    if (this.doubleClickDetected()) {
      const existingTabIndex = this.tabs.findIndex(
        (tab) => tab.title === title
      );

      if (existingTabIndex !== -1) {
        if (this.tabs[existingTabIndex].isOpen) {
          this.setActive(existingTabIndex);
        } else {
          const maxTabs =
            window.innerWidth <= 768 ? this.maxTabsMobile : this.maxTabsDesktop;            
          this.tabs.length === maxTabs
            ? (this.tabs[existingTabIndex].isOpen = false)
            : (this.tabs[existingTabIndex].isOpen = true);
          this.setActive(existingTabIndex);
        }
      } else {
        this.tabs.pop();
        tab.isOpen = true;
        this.tabs.push(tab);
        this.setActive(this.tabs.length - 1);
      }
    } else {
      const existingTabIndex = this.tabs.findIndex(
        (tab) => tab.title === title
      );

      if (existingTabIndex !== -1) {
        this.setActive(existingTabIndex);
        return;
      }

      const isNotOpen = this.tabs.findIndex((tab) => !tab.isOpen);

      if (isNotOpen !== -1) {
        this.tabs[isNotOpen].title = title;
        this.tabs[isNotOpen].content = content;
        this.tabs[isNotOpen].icon = icon;
        this.tabs[isNotOpen].isOpen = isOpen;
        this.setActive(isNotOpen);
      } else {
        this.tabs.push(tab);
        this.setActive(this.tabs.length - 1);
      }
    }

    this.render();
    this.activeFocus();
  }

  render() {
    const tabsContainer = document.getElementById("tabs");
    tabsContainer.innerHTML = "";

    this.tabs.forEach((tab, index) => {
      if (tab.title !== "Welcome") {
        const rootPath = document.getElementById("rootPath");
        rootPath.style.visibility = "visible";
      }
      const tabDiv = document.createElement("div");
      tabDiv.classList.add("tab");

      const tabIcon = document.createElement("img");
      tabIcon.setAttribute("src", tab.icon);
      tabIcon.classList.add("iconTab");

      const tabElement = document.createElement("div");
      tabElement.classList.add("tabTitle");
      if (!tab.isOpen) {
        tabElement.style.fontStyle = "italic";
      }
      tabElement.textContent = tab.title;

      tabDiv.addEventListener("click", () => {
        this.setActive(index);
      });

      tabDiv.addEventListener("dblclick", () => {
        if (!tab.isOpen) {
          this.tabs.pop();
          tab.isOpen = true;
          this.tabs.push(tab);
          this.setActive(this.tabs.length - 1);
        }
      });

      const closeButton = document.createElement("img");
      closeButton.setAttribute("src", this.closeX);
      closeButton.classList.add("closeButton");
      closeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        this.close(index);
      });

      tabDiv.appendChild(tabIcon);
      tabDiv.appendChild(tabElement);
      tabDiv.appendChild(closeButton);
      tabsContainer.appendChild(tabDiv);
    });
  }

  setActive(index) {
    if (this.tabs[index]) {
      this.activeTabIndex = index;
      this.render();
      this.renderMainView();
      this.activeFocus();
    }
  }

  activeFocus() {
    const tabButtons = document.querySelectorAll(".tab");
    const activeTabButton = tabButtons[this.activeTabIndex];
    tabButtons.forEach((button) => {
      button.classList.remove("activeTab");
    });
    activeTabButton.classList.add("activeTab");
  }

  close(index) {
    const rootPath = document.getElementById("rootPath");
    rootPath.textContent = "";

    const mainViewContainer = document.getElementById("mainView");
    mainViewContainer.textContent = "";

    const wasActiveTab = index === this.activeTabIndex;

    this.tabs.splice(index, 1);
    this.render();

    if (wasActiveTab) {
      const nextActiveTabIndex = index === this.tabs.length ? index - 1 : index;
      this.setActive(nextActiveTabIndex);
    } else {
      const newActiveTabIndex =
        this.activeTabIndex >= index
          ? this.activeTabIndex - 1
          : this.activeTabIndex;
      this.setActive(newActiveTabIndex);
    }

    if (this.tabs.length === 0) {
      this.noTabs();
    }
  }

  renderMainView() {
    const mainView = document.getElementById("mainView");
    mainView.innerHTML = "";

    if (this.activeTabIndex !== -1 && this.tabs[this.activeTabIndex]) {
      const activeTab = this.tabs[this.activeTabIndex];
      activeTab.content();
    }
  }

  noTabs() {
    const rootPath = document.getElementById("rootPath");
    rootPath.style.visibility = "visible";

    const heroMain = document.createElement("div");
    heroMain.classList.add("heroMain");

    renderNoTabs();
  }

  doubleClickDetected() {
    const now = new Date().getTime();
    const timeSinceLastClick = now - this.lastClickTime;

    if (timeSinceLastClick < 300) {
      this.lastClickTime = 0;
      return true;
    }

    this.lastClickTime = now;
    return false;
  }
}

const tabManager = new TabManager();

export { tabManager };

import { tabManager } from "../tabs/TabsManager.js";
import { renderMainBookmark } from "./renderMainBookmark.js";

const renderFavoriteBookmark = (bookmark, nodo) => {
  const bookmarkContainer = document.createElement("div");
  bookmarkContainer.classList.add("bookmark");
  bookmarkContainer.setAttribute("id", bookmark.id);
  bookmarkContainer.addEventListener("click", openBookmark);

  const bookmarkIcon = document.createElement("img");
  bookmarkIcon.setAttribute("src", bookmark.icon);
  bookmarkIcon.setAttribute("alt", bookmark.title);

  const bookmarkTitle = document.createElement("span");
  bookmarkTitle.textContent = bookmark.title;

  bookmarkContainer.appendChild(bookmarkIcon);
  bookmarkContainer.appendChild(bookmarkTitle);
  nodo.appendChild(bookmarkContainer);

  function openBookmark() {
    const bookmarkInfo = bookmark;
    tabManager.create(
      bookmarkInfo.title,
      () => renderMainBookmark(bookmarkInfo),
      bookmarkInfo.icon
    );
  }
};

export { renderFavoriteBookmark };

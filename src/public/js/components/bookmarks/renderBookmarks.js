import { btnFocus } from "../../utils/btnFocus.js";
import { tabManager } from "../tabs/TabsManager.js";
import { bookmarks, youtubeId } from "./bookmarksObj.js";
import { renderMainBookmark } from "./renderMainBookmark.js";
import { renderYoutube } from "./renderYoutubeBookmark.js";

const renderBookmarks = () => {
  const titleSideBar = document.getElementById("titleSideBar");
  titleSideBar.textContent = "BOOKMARKS";

  const fileOpen = document.getElementById("fileOpen");
  fileOpen.textContent = "FAVORITE";

  const viewSideBar = document.getElementById("viewSideBar");
  viewSideBar.innerHTML = "";

  const channelsContainer = document.createElement("div");
  channelsContainer.classList.add("channelsContainer");

  const youtubeContainer = document.createElement("div");
  youtubeContainer.classList.add("youtubeContainerTitle");

  const youtubeTitle = document.createElement("span");
  youtubeTitle.textContent = "RECOMMENDED CHANNELS";

  const bookmarksContainer = document.createElement("div");
  bookmarksContainer.classList.add("booksmarksContainer");

  bookmarks.forEach((bookmark) => {
    const bookmarkContainer = document.createElement("div");
    bookmarkContainer.classList.add("bookmark");
    bookmarkContainer.setAttribute("id", bookmark.id);
    bookmarkContainer.dataset.tab = bookmark.id;
    bookmarkContainer.addEventListener("click", openBookmark);

    const bookmarkIcon = document.createElement("img");
    bookmarkIcon.setAttribute("src", bookmark.icon);
    bookmarkIcon.setAttribute("alt", bookmark.title);

    const bookmarkTitle = document.createElement("span");
    bookmarkTitle.textContent = bookmark.title;

    bookmarksContainer.appendChild(bookmarkContainer);
    bookmarkContainer.appendChild(bookmarkIcon);
    bookmarkContainer.appendChild(bookmarkTitle);
    viewSideBar.appendChild(bookmarksContainer);
  });

  function openBookmark(event) {
    const id = event.target.closest(".bookmark").dataset.tab;
    const bookmark = bookmarks.find((e) => e.id === id);

    tabManager.create(
      bookmark.title,
      () => renderMainBookmark(bookmark),
      bookmark.icon
    );
  }

  youtubeContainer.appendChild(youtubeTitle);
  channelsContainer.appendChild(youtubeContainer);
  viewSideBar.appendChild(channelsContainer);

  renderYoutube(youtubeId, channelsContainer);

  const BtnBookmarks = viewSideBar.querySelectorAll(".bookmark");
  btnFocus(BtnBookmarks, "activeFile");
};

export { renderBookmarks };

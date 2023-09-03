import { btnFocus } from "../../utils/btnFocus.js";
import { bookmarks, youtubeId } from "./bookmarksObj.js";
import { renderFavoriteBookmark } from "./renderFavoriteBookmark.js";
import { renderYoutube } from "./renderYoutubeBookmark.js";

const renderBookmarks = async () => {
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

  const channelsRecommendedContainer = document.createElement("div");
  channelsRecommendedContainer.classList.add("channelsRecommendedContainer");

  const bookmarksContainer = document.createElement("div");
  bookmarksContainer.classList.add("booksmarksContainer");

  bookmarks.forEach((bookmark) =>{
    renderFavoriteBookmark(bookmark, bookmarksContainer);
  })

  viewSideBar.appendChild(bookmarksContainer);
  youtubeContainer.appendChild(youtubeTitle);
  channelsContainer.appendChild(youtubeContainer);
  channelsContainer.appendChild(channelsRecommendedContainer);
  viewSideBar.appendChild(channelsContainer);

  // await renderYoutube(youtubeId, channelsRecommendedContainer).then(() => {
  //   const BtnBookmarks = viewSideBar.querySelectorAll(".bookmark");
  //   btnFocus(BtnBookmarks, "activeFile");
  // });
  const BtnBookmarks = viewSideBar.querySelectorAll(".bookmark");
    btnFocus(BtnBookmarks, "activeFile");
};

export { renderBookmarks };

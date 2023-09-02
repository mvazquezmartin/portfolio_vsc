const renderMainBookmark = (bookmark) => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";

  const path = document.getElementById("rootPath");
  path.textContent = `Bookmarks > ${bookmark.title}`;

  const bookmarkMainContainer = document.createElement("div");
  bookmarkMainContainer.classList.add("bookmarkMainContainer");

  const infoContent = document.createElement("div");
  infoContent.classList.add("infoContent");

  const bookmarkTitle = document.createElement("h1");

  const bookmarkIconLink = document.createElement("i");
  bookmarkIconLink.classList.add("bi", "bi-link-45deg");

  const bookmarkLink = document.createElement("a");
  bookmarkLink.setAttribute("href", bookmark.link);
  bookmarkLink.setAttribute("target", "_blank");
  bookmarkLink.textContent = bookmark.title;

  const bookmarkDescription = document.createElement("p");
  bookmarkDescription.classList.add("bookmarkDescription");
  bookmarkDescription.textContent = bookmark.description;

  const bookmarkApplied = document.createElement("p");
  bookmarkApplied.classList.add("bookmarkApplied");
  bookmarkApplied.textContent = `Aplicado en: ${bookmark.applied}`;

  const bookmarkImg = document.createElement("img");
  bookmarkImg.classList.add("bookmarkImg");
  bookmarkImg.setAttribute("src", bookmark.img);
  bookmarkImg.setAttribute("alt", bookmark.title);

  bookmarkTitle.appendChild(bookmarkIconLink);
  bookmarkTitle.appendChild(bookmarkLink);
  infoContent.appendChild(bookmarkTitle);
  infoContent.appendChild(bookmarkDescription);
  infoContent.appendChild(bookmarkApplied);
  bookmarkMainContainer.appendChild(infoContent);
  bookmarkMainContainer.appendChild(bookmarkImg);
  mainView.appendChild(bookmarkMainContainer);
};

export { renderMainBookmark };

const renderMainChannel = (channel) => {
  const mainView = document.getElementById("mainView");
  mainView.innerHTML = "";

  const path = document.getElementById("rootPath");
  path.textContent = `Bookmarks > Recommended Channel > ${channel.channel}`;

  const channelMainContainer = document.createElement("div");
  channelMainContainer.classList.add("channelMainContainer");

  const channelCardContainer = document.createElement("div");
  channelCardContainer.classList.add("channelCardContainer");

  const channelBannerContainer = document.createElement("div");
  channelBannerContainer.classList.add("channelBannerContainer");

  const channelBanner = document.createElement("img");
  channelBanner.setAttribute("src", channel.banner);
  channelBanner.setAttribute("alt", channel.channel);

  const channelInfoContainer = document.createElement("div");
  channelInfoContainer.classList.add("channelInfoContainer");

  const thumbnailsContainer = document.createElement("div");
  thumbnailsContainer.classList.add("thumbnailsContainer");

  const channelThumbnails = document.createElement("img");
  channelThumbnails.setAttribute("src", channel.thumbnails);
  channelThumbnails.setAttribute("alt", channel.customUrl);

  const channelContentContainer = document.createElement("div");
  channelContentContainer.classList.add("channelContentContainer");

  const channelTitle = document.createElement("p");
  channelTitle.classList.add("channelTitle");
  channelTitle.textContent = channel.channel;

  const channelCustomUrl = document.createElement("span");
  channelCustomUrl.classList.add("channelCustomUrl");

  const channelLink = document.createElement("a");
  channelLink.setAttribute(
    "href",
    `https://www.youtube.com/${channel.customUrl}`
  );
  channelLink.setAttribute("target", "_blank");
  channelLink.textContent = channel.customUrl;

  const channelDescription = document.createElement("p");
  channelDescription.classList.add("channelDescription");
  channelDescription.textContent = channel.description;

  const videosContainer = document.createElement("div");
  videosContainer.classList.add("videosContainer");

  channel.latestVideo.forEach((video) => {
    const videoContainer = document.createElement("div");
    videoContainer.classList.add("videoContainer");

    const videoThumbnails = document.createElement("img");
    videoThumbnails.classList.add("videoThumbnails");
    videoThumbnails.setAttribute("src", video.thumbnail);
    videoThumbnails.setAttribute("alt", channel.channel);

    const videoContentContainer = document.createElement("div");
    videoContentContainer.classList.add("videoContentContainer");

    const videoTitle = document.createElement("span");
    const videoLink = document.createElement("a");
    videoLink.setAttribute("href", video.videoLink);
    videoLink.setAttribute("target", "_blank");
    videoLink.textContent = video.title;

    videoContainer.appendChild(videoThumbnails);
    videoContainer.appendChild(videoContentContainer);
    videoContentContainer.appendChild(videoTitle);
    videoTitle.appendChild(videoLink);
    videosContainer.appendChild(videoContainer);
  });

  channelMainContainer.appendChild(channelCardContainer);
  channelBannerContainer.appendChild(channelBanner);
  channelCardContainer.appendChild(channelBannerContainer);
  channelCardContainer.appendChild(channelInfoContainer);
  thumbnailsContainer.appendChild(channelThumbnails);
  channelInfoContainer.appendChild(thumbnailsContainer);
  channelInfoContainer.appendChild(channelContentContainer);
  channelContentContainer.appendChild(channelTitle);
  channelCustomUrl.appendChild(channelLink);
  channelContentContainer.appendChild(channelCustomUrl);
  channelContentContainer.appendChild(channelDescription);
  channelMainContainer.appendChild(videosContainer);
  mainView.appendChild(channelMainContainer);
};

export { renderMainChannel };
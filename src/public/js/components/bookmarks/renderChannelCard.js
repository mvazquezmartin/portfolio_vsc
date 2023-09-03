import { iconPath } from "../../assetsPath/assetsPath.js";
import { tabManager } from "../tabs/TabsManager.js";
import { renderMainChannel } from "./renderMainChannel.js";

const renderChannelCard = (data, nodo) => {
  const channelCard = document.createElement("div");
  channelCard.classList.add("bookmark");
  channelCard.setAttribute("id", data.payload.customUrl);
  channelCard.addEventListener("click", openChannel);

  const thumbnailsCard = document.createElement("img");
  thumbnailsCard.classList.add("thumbnailsCard");
  thumbnailsCard.setAttribute("src", data.payload.thumbnails);

  const titleContainerCard = document.createElement("div");
  titleContainerCard.classList.add("titleContainerCard");

  const titleCard = document.createElement("span");
  titleCard.textContent = data.payload.channel;

  channelCard.appendChild(thumbnailsCard);
  titleContainerCard.appendChild(titleCard);
  channelCard.appendChild(titleContainerCard);
  nodo.appendChild(channelCard);

  function openChannel() {
    const channel = data.payload;
    tabManager.create(
      channel.channel,
      () => renderMainChannel(channel),
      iconPath.YOUTUBE
    );
  }
};

export { renderChannelCard };

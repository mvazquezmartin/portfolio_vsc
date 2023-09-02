const renderYoutube = (youtubeChannels, nodo) => {
  const channelArray = Object.values(youtubeChannels);

  channelArray.forEach((chanelId) => {
    fetch(`http://localhost:3030/getinfochannel?channelId=${chanelId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta de la API");
        }
        return response.json();
      })
      .then((data) => {
        const channelCard = document.createElement("div");
        channelCard.classList.add("bookmark");

        const thumbnailsCard = document.createElement("img");
        thumbnailsCard.classList.add("thumbnailsCard");
        thumbnailsCard.setAttribute("src", data.payload.thumbnails);

        const titleContainerCard = document.createElement("div");
        titleContainerCard.classList.add("titleContainerCard");

        const titleCard = document.createElement("span");
        titleCard.textContent = data.payload.user;

        channelCard.appendChild(thumbnailsCard);
        titleContainerCard.appendChild(titleCard);
        channelCard.appendChild(titleContainerCard);
        nodo.appendChild(channelCard);
      });
  });
};

export { renderYoutube };

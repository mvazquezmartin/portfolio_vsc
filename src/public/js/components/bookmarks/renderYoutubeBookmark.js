import { renderChannelCard } from "./renderChannelCard.js";

const cacheData = {};

const renderYoutube = async (youtubeChannels, nodo) => {
  const channelArray = Object.values(youtubeChannels);

  const fetchPromises = channelArray.map(async (channelId) => {
    try {
      if (!cacheData[channelId]) {
        const response = await fetch(
          `http://localhost:3030/getinfochannel?channelId=${channelId}`
        );
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta de la API");
        }
        const data = await response.json();
        cacheData[channelId] = data;
      }

      renderChannelCard(cacheData[channelId], nodo);
    } catch (error) {
      console.log(error);
    }
  });

  await Promise.all(fetchPromises);
};

export { renderYoutube };

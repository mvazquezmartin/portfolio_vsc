//DEPRECADO POR CLASS CACHEMANAGER

// const fs = require("fs");
// const path = require("path");

// const cacheFilePath = path.join(
//   __dirname,
//   "../dao/apiYoutubeCache/file/cacheYoutube.json"
// );

// const cacheData = require(cacheFilePath);

// const isValidCache = (channelId) => {
//   try {
//     if (!fs.existsSync(cacheFilePath)) return false;
//     if (!cacheData[channelId]) return false;

//     const currentTime = new Date().getTime();
//     const lastUpdatedTime = cacheData[channelId].timestamp;
//     const fileAge = currentTime - lastUpdatedTime;

//     // const cacheExpiration = 24 * 60 * 60 * 1000;
//     const cacheExpiration = 5 * 60 * 1000;

//     return fileAge <= cacheExpiration;
//   } catch (error) {
//     throw error;
//   }
// };

// module.exports = isValidCache;

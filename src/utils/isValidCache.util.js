const fs = require("fs");
const path = require("path");

const cacheFilePath = path.join(
  __dirname,
  "../dao/apiYoutubeCache/file/cacheYoutube.json"
);

const isValidCache = async () => {
  try {
    if (!fs.existsSync(cacheFilePath)) return false;

    const stats = await fs.statSync(cacheFilePath);
    const currentTime = new Date().getTime();
    const fileAge = currentTime - stats.mtime.getTime();

    //const cacheExpiration = 24 * 60 * 60 * 1000;
    const cacheExpiration = 5 * 60 * 1000;

    return fileAge <= cacheExpiration;
  } catch (error) {
    throw error;
  }
};

module.exports = isValidCache;

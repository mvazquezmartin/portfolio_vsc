const path = require("path");
const CacheManager = require("../dao/apiYoutubeCache/cache.manager.fs");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");

const cachePath = path.join(
  __dirname,
  "../dao/apiYoutubeCache/file/cacheYoutube.json"
);

class CacheService {
  constructor(cacheFilePath) {
    this.cacheManager = new CacheManager(cacheFilePath);
  }

  async getOne(channelId) {
    const data = await this.cacheManager.getOne(channelId);
    if (!data) return { payload: null };
    return {
      code: HTTP_STATUS_CODES.OK,
      status: "success",
      payload: data.data,
    };
  }

  async create(channelId, channelInfo) {
    await this.cacheManager.create(channelId, channelInfo);
  }

  async delete(channelId) {
    await this.cacheManager.delete(channelId);
  }

  async isValidCache(channelId) {
    try {
      return await this.cacheManager.isValidCache(channelId);
    } catch (error) {
      console.log("Error in validCache:", error);
      throw error;
    }
  }
}

const cacheService = new CacheService(cachePath);

module.exports = cacheService;

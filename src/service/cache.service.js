const CacheManager = require("../dao/cache/cache.manager.fs");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");

class CacheService {
  constructor(cacheFilePath) {
    this.cacheManager = new CacheManager(cacheFilePath);
  }

  async getAll() {
    const data = await this.cacheManager.getAll();
    if (!data) return { code: HTTP_STATUS_CODES.NOT_FOUND, status: "error" };

    const transformedData = data.map((item) => ({
      id: item.id,
      owner: item.data.owner,
      name: item.data.name,
      description: item.data.description,
      html_url: item.data.html_url,
    }));

    return {
      code: HTTP_STATUS_CODES.OK,
      status: "success",
      payload: transformedData,
    };
  }

  async getOne(id) {
    const data = await this.cacheManager.getOne(id);
    if (!data) return { payload: null };
    return {
      code: HTTP_STATUS_CODES.OK,
      status: "success",
      payload: data.data,
    };
  }

  async create(id, data) {
    await this.cacheManager.create(id, data);
  }

  async delete(id) {
    await this.cacheManager.delete(id);
  }

  async isValidCache(id) {
    try {
      return await this.cacheManager.isValidCache(id);
    } catch (error) {
      console.log("Error in validCache:", error);
      throw error;
    }
  }
}

// const cacheService = new CacheService(cachePath);

module.exports = CacheService;

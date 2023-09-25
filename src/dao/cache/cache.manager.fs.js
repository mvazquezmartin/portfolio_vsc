const fs = require("fs");

class CacheManager {
  constructor(path) {
    this.data = [];
    this.filePath = path;
    this.idIndex = {};
  }

  async getAll() {
    try {
      await this.readFile();

      if (!this.data) return null;

      return this.data;
    } catch (error) {
      console.error("Error in getAll:", error);
      throw error;
    }
  }

  async getOne(id) {
    try {
      await this.readFile();

      if (!this.data) return null;

      if (!this.idIndex[id]) return null;

      const dataFromCache = this.data.find((channel) => channel.id === id);

      return dataFromCache || null;
    } catch (error) {
      console.error("Error in getOne:", error);
      throw error;
    }
  }

  async create(id, info) {
    try {
      await this.readFile();

      const newData = {
        id,
        data: info,
        timestamp: new Date().getTime(),
      };

      if (!this.idIndex[id]) {
        this.data.push(newData);
        this.idIndex[id] = true;

        await this.saveFile();
      } else {
        const existingDataIndex = this.data.findIndex(
          (channel) => channel.id === id
        );

        this.data[existingDataIndex] = newData;

        await this.saveFile();
      }
    } catch (error) {
      console.error("Error in create:", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      await this.readFile();

      const existingDataIndex = this.data.findIndex(
        (channel) => channel.id === id
      );

      if (existingDataIndex !== -1) {
        this.data.splice(existingDataIndex, 1);
        await this.saveFile();
      }
    } catch (error) {
      console.log("Error in delete:", error);
      throw error;
    }
  }

  async isValidCache(id) {
    try {
      await this.readFile();

      if (!this.data) return false;

      const dataFromCache = this.data.find((channel) => channel.id === id);

      if (!dataFromCache) return false;

      const currentTime = new Date().getTime();
      const lastUpdatedTime = dataFromCache.timestamp;
      const fileAge = currentTime - lastUpdatedTime;

      const cacheExpiration = 24 * 60 * 60 * 1000;
      // const cacheExpiration = 5 * 60 * 1000;

      return fileAge <= cacheExpiration;
    } catch (error) {
      console.log("Error in isValidCache:", error);
      throw error;
    }
  }

  async readFile() {
    try {
      const data = await fs.promises.readFile(this.filePath, "utf-8");
      if (data) {
        this.data = JSON.parse(data);
        this.data.forEach((item) => {
          this.idIndex[item.id] = true;
        });
      }
    } catch (error) {
      console.error("Error in readFile:", error);
      throw error;
    }
  }

  async saveFile() {
    try {
      const jsonData = JSON.stringify(this.data);
      await fs.promises.writeFile(this.filePath, jsonData);
    } catch (error) {
      console.error("Error in saveFile:", error);
      throw error;
    }
  }
}

module.exports = CacheManager;

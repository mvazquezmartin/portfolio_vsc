const fs = require("fs");

class CacheManager {
  constructor(path) {
    this.data = [];
    this.filePath = path;
    this.channelIdIndex = {};
  }

  async getOne(channelId) {
    try {
      await this.readFile();

      if (!this.data) return null;

      if (!this.channelIdIndex[channelId]) return null;

      const channelData = this.data.find(
        (channel) => channel.channelId === channelId
      );

      return channelData || null;
    } catch (error) {
      console.error("Error in getOne:", error);
      throw error;
    }
  }

  async create(channelId, channelInfo) {
    try {
      await this.readFile();

      const newData = {
        channelId,
        data: channelInfo,
        timestamp: new Date().getTime(),
      };

      if (!this.channelIdIndex[channelId]) {
        this.data.push(newData);
        this.channelIdIndex[channelId] = true;

        await this.saveFile();
      } else {
        const existingDataIndex = this.data.findIndex(
          (channel) => channel.channelId === channelId
        );

        this.data[existingDataIndex] = newData;

        await this.saveFile();
      }
    } catch (error) {
      console.error("Error in create:", error);
      throw error;
    }
  }

  async delete(channelId) {
    try {
      await this.readFile();

      const existingDataIndex = this.data.findIndex(
        (channel) => channel.channelId === channelId
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

  async isValidCache(channelId) {
    try {
      await this.readFile();

      if (!this.data) return false;

      if (!this.channelIdIndex[channelId]) return false;

      const channelData = this.data.find(
        (channel) => channel.channelId === channelId
      );

      if (!channelData) return false;

      const currentTime = new Date().getTime();
      const lastUpdatedTime = channelData.timestamp;
      const fileAge = currentTime - lastUpdatedTime;

      const cacheExpiration = 24 * 60 * 60 * 1000;
      //const cacheExpiration = 5 * 60 * 1000;

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
          this.channelIdIndex[item.channelId] = true;
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

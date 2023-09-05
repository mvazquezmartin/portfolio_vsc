const fs = require("fs");

class CacheManager {
  constructor(path) {
    this.data = [];
    this.filePath = path;
  }

  async getOne(channelId) {
    try {
      await this.readFile();

      if (!this.data) return null;

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
      };

      const existingDataIndex = this.data.findIndex(
        (channel) => channel.channelId === channelId
      );

      if (existingDataIndex !== -1) {
        this.data[existingDataIndex].data = channelInfo;
      }

      this.data.push(newData);

      await this.saveFile();
    } catch (error) {
      console.error("Error in create:", error);
      throw error;
    }
  }

  async readFile() {
    try {
      const data = await fs.promises.readFile(this.filePath, "utf-8");
      if (data) this.data = JSON.parse(data);
    } catch (error) {
      console.error("Error in readFile:", error);
      throw error;
    }
  }

  async saveFile() {
    try {
      await fs.promises.writeFile(this.filePath, JSON.stringify(this.data));
    } catch (error) {
      console.error("Error in saveFile:", error);
      throw error;
    }
  }
}

module.exports = CacheManager;

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
      throw error;
    }
  }

  async create(channelId, channelInfo) {
    try {
      const newData = {
        channelId,
        data: channelInfo,
      };

      const existingDataIndex = this.data.findIndex(
        (channel) => channel.channelId === channelId
      );

      if (existingDataIndex !== -1) {
        this.data[existingDataIndex] = newData;
      }

      this.data.push(newData);

      await this.saveFile();
    } catch (error) {}
  }

  async readFile() {
    try {
      const data = await fs.promises.readFile(this.filePath, "utf-8");
      if (data) this.data = JSON.parse(data);
    } catch (error) {
      throw error;
    }
  }

  async saveFile() {
    try {
      await fs.promises.writeFile(this.filePath, JSON.stringify(this.data));
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CacheManager;

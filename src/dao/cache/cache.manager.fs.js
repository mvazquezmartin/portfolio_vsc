import fs from"fs";

class CacheManager {
  constructor(path) {
    this.filePath = path;
    this.data = [];
    this.idIndex = {};
    this.initializeCache(); // Lee el archivo una vez al crear la instancia
  }

  async create(id, info) {
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
  }

  async getAll() {
    return this.data;
  }

  async getOne(id) {
    if (!this.idIndex[id]) return null;
    return this.data.find((channel) => channel.id === id) || null;
  }

  async delete(id) {
    const existingDataIndex = this.data.findIndex(
      (channel) => channel.id === id
    );
    if (existingDataIndex !== -1) {
      this.data.splice(existingDataIndex, 1);
      await this.saveFile();
    }
  }

  async initializeCache() {
    try {
      const parsedData = await this.processData();
      this.data = parsedData;
      this.updateIndex();
    } catch (error) {
      console.error("Error in initializeCache:", error);
      throw error;
    }
  }

  async processData() {
    try {
      const data = await fs.promises.readFile(this.filePath, "utf-8");
      
      if (data) return JSON.parse(data);

      return [];
    } catch (error) {
      console.error("Error in processData:", error);
      throw error;
    }
  }

  updateIndex() {
    this.idIndex = {};
    this.data.forEach((item) => {
      this.idIndex[item.id] = true;
    });
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

  async isValidCache(id) {
    if (!this.idIndex[id]) return false;

    const dataFromCache = this.data.find((channel) => channel.id === id);

    const currentTime = new Date().getTime();
    const lastUpdatedTime = dataFromCache.timestamp;
    const fileAge = currentTime - lastUpdatedTime;

    const cacheExpiration = 24 * 60 * 60 * 1000;
    // const cacheExpiration = 5 * 60 * 1000;

    return fileAge <= cacheExpiration;
  }
}

export default CacheManager;
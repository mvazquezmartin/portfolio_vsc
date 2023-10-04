const fs = require("fs");

class CacheManager {
  constructor(path) {
    this.filePath = path;
    this.data = [];
    this.idIndex = {};
    this.initializeCache(); // Lee el archivo una vez al crear la instancia
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
      if (data) {
        return JSON.parse(data);
      }
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

module.exports = CacheManager;

// const fs = require("fs");

// class CacheManager {
//   constructor(path) {
//     this.data = [];
//     this.filePath = path;
//     this.idIndex = {};
//   }

//   async getAll() {
//     try {
//       await this.readFile();

//       if (!this.data) return null;

//       return this.data;
//     } catch (error) {
//       console.error("Error in getAll:", error);
//       throw error;
//     }
//   }

//   async getOne(id) {
//     try {
//       await this.readFile();

//       if (!this.data) return null;

//       if (!this.idIndex[id]) return null;

//       const dataFromCache = this.data.find((channel) => channel.id === id);

//       return dataFromCache || null;
//     } catch (error) {
//       console.error("Error in getOne:", error);
//       throw error;
//     }
//   }

//   async create(id, info) {
//     try {
//       await this.readFile();

//       const newData = {
//         id,
//         data: info,
//         timestamp: new Date().getTime(),
//       };

//       if (!this.idIndex[id]) {
//         this.data.push(newData);
//         this.idIndex[id] = true;

//         await this.saveFile();
//       } else {
//         const existingDataIndex = this.data.findIndex(
//           (channel) => channel.id === id
//         );

//         this.data[existingDataIndex] = newData;

//         await this.saveFile();
//       }
//     } catch (error) {
//       console.error("Error in create:", error);
//       throw error;
//     }
//   }

//   async delete(id) {
//     try {
//       await this.readFile();

//       const existingDataIndex = this.data.findIndex(
//         (channel) => channel.id === id
//       );

//       if (existingDataIndex !== -1) {
//         this.data.splice(existingDataIndex, 1);
//         await this.saveFile();
//       }
//     } catch (error) {
//       console.log("Error in delete:", error);
//       throw error;
//     }
//   }

//   async isValidCache(id) {
//     try {
//       await this.readFile();

//       if (!this.data) return false;

//       // if (!dataFromCache) return false;

//       if (!this.idIndex[id]) return false;

//       const dataFromCache = this.data.find((channel) => channel.id === id);

//       const currentTime = new Date().getTime();
//       const lastUpdatedTime = dataFromCache.timestamp;
//       const fileAge = currentTime - lastUpdatedTime;

//       const cacheExpiration = 24 * 60 * 60 * 1000;
//       // const cacheExpiration = 5 * 60 * 1000;

//       return fileAge <= cacheExpiration;
//     } catch (error) {
//       console.log("Error in isValidCache:", error);
//       throw error;
//     }
//   }

//   async readFile() {
//     try {
//       const data = await fs.promises.readFile(this.filePath, "utf-8");
//       if (data) {
//         this.data = JSON.parse(data);
//         this.data.forEach((item) => {
//           this.idIndex[item.id] = true;
//         });
//       }
//     } catch (error) {
//       console.error("Error in readFile:", error);
//       throw error;
//     }
//   }

//   async saveFile() {
//     try {
//       const jsonData = JSON.stringify(this.data);
//       await fs.promises.writeFile(this.filePath, jsonData);
//     } catch (error) {
//       console.error("Error in saveFile:", error);
//       throw error;
//     }
//   }
// }

// module.exports = CacheManager;

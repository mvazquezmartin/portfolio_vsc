import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const restartFile = path.join(process.cwd(), "src/dao/restart/restartStorage.json");

class ItemManager {
  constructor(path) {
    this.items = [];
    this.filePath = path;
  }

  async getAll() {
    try {
      await this.readFile();

      const data = this.items.filter((prod) => prod.status === true);
      if (data.length === 0) return null;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id) {
    try {
      await this.readFile();

      const item = this.items.find((item) => item._id === id);

      const data = item && item.status === true ? item : null;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async create(item) {
    try {
      const newItem = {
        _id: uuidv4(),
        ...item,
        status: true,
      };

      await this.readFile();
      this.items.push(newItem);
      await this.saveFile();

      return newItem;
    } catch (error) {
      throw error;
    }
  }

  async update(id, updates) {
    try {
      await this.readFile();

      const itemIndex = this.items.findIndex((item) => item._id === id);
      const updatedItem = { ...this.items[itemIndex], ...updates };
      this.items[itemIndex] = updatedItem;

      await this.saveFile();

      return updatedItem;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      await this.readFile();

      const itemIndex = this.items.findIndex((prod) => prod._id === id);

      if (itemIndex === -1 || !this.items[itemIndex].status) return null;

      this.items[itemIndex].status = false;
      await this.saveFile();

      const item = this.items[itemIndex];

      return item;
    } catch (error) {
      throw error;
    }
  }

  async deleteAll() {
    try {
      await this.readFile();
      this.items = [];
      await this.saveFile();
    } catch (error) {
      throw error;
    }
  }

  async restart() {
    try {
      const data = await fs.promises.readFile(restartFile, "utf-8");
      this.items = JSON.parse(data);

      await this.saveFile();
    } catch (error) {
      throw error;
    }
  }

  async readFile() {
    try {
      const data = await fs.promises.readFile(this.filePath, "utf-8");
      if (data) this.items = JSON.parse(data);
    } catch (error) {
      throw error;
    }
  }

  async saveFile() {
    try {
      await fs.promises.writeFile(this.filePath, JSON.stringify(this.items));
    } catch (error) {
      throw error;
    }
  }
}

export default ItemManager;

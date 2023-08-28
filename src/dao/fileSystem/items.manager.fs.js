const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const restartFile = path.join(__dirname, "../restart/restartStorage.json");

class ItemManager {
  constructor(path) {
    this.items = [];
    this.path = path;
  }

  async getAll() {
    try {
      await this.readFile();
      const productStatusTrue = this.items.filter(
        (prod) => prod.status === true
      );
      this.items = productStatusTrue;
      return this.items;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getOneById(id) {
    try {
      await this.readFile();

      const iid = Number(id);

      const item = this.items.find((item) => item._id === iid);

      return item;
    } catch (error) {
      throw error;
    }
  }

  async create(item) {
    try {
      const {
        title,
        description,
        category,
        image,
        price,
        stock,
        status = true,
      } = item;

      const _id = uuidv4();

      const newItem = {
        _id,
        title,
        description,
        category,
        image,
        price,
        stock,
        status,
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

      const updateItem = { ...this.items.findIndex(itemIndex), ...updates };
      this.items[itemIndex] = updateItem;

      await this.saveFile();
      const item = this.items[itemIndex];

      return item;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      await this.readFile();

      const _id = Number(id);

      const index = this.items.findIndex((prod) => prod._id === _id);
      if (index === -1) return [];

      const item = this.items[index];
      if (item.status === false) return [];

      this.items[index].status = false;
      await this.saveFile();

      return item;
    } catch (error) {
      throw error;
    }
  }

  async restart() {
    try {
      const data = await fs.promises.readFile(restartFile, "utf-8");
      this.items = JSON.parse(data);
      await this.saveFile();

      return { message: "hola mundo" };
    } catch (error) {
      throw error;
    }
  }

  async saveFile() {
    try {
      await fs.promises.writeFile(this.path, JSON.stringify(this.items));
    } catch (error) {
      throw error;
    }
  }

  async readFile() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      if (data) this.items = JSON.parse(data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ItemManager;

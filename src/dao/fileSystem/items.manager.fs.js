const fs = require("fs");

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

  async delete(id) {
    try {
      await this.readFile();

      const _id = parseInt(id);
      const index = this.items.findIndex((prod) => prod.id === _id);

      if (index === -1) {
        return [];
      }
      this.items[index].status = false;
      await this.saveFile();

      return this.products[index];
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

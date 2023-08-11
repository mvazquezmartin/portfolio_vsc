const fs = require("fs");

class ItemManager {
  constructor(path) {
    this.items = [];
    this.path = path;
  }

  async getAll() {
    try {
      await this.readFile();
      const productStatusTrue = this.products.filter(
        (prod) => prod.status === true
      );
      this.products = productStatusTrue;
      return this.products;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async delete(id) {
    try {
      await this.readFile();

      const _id = parseInt(id);
      const index = this.products.findIndex((prod) => prod.id === _id);

      if (index !== -1) {
        this.products[index].status = false;
        await this.saveFile();
        return this.products[index];
      }
      return [];
    } catch (error) {
      throw error;
    }
  }

  async saveFile() {
    try {
      await fs.promises.writeFile(this.path, JSON.stringify(this.products));
    } catch (error) {
      console.log(error);
    }
  }

  async readFile() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      if (data) this.products = JSON.parse(data);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ItemManager;

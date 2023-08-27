const Items = require("./model/item.model");

class ItemManager {
  async getAll() {
    try {
      const data = await Items.find();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id) {
    try {
      const data = await Items.findById(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async create(item) {
    try {
      const data = await Items.create(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(id, update) {
    try {
      const data = await Items.findByIdAndUpdate(id, update);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const data = await Items.findByIdAndUpdate(id, { status: false });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ItemManager;

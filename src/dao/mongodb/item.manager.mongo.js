import fs from 'fs';
import path from 'path';
import Items from './model/item.model.js';
import ItemDTO from '../../dto/item.dto.js';
import __dirname from '../../utils/dirname.util.js';

const restartFile = path.join(__dirname, '/restart/restartStorage.json');

class ItemManager {
  async getAll() {
    try {
      const data = await Items.find();
      if (data.length === 0) return null;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id) {
    try {
      const data = await Items.findOne({ _id: id, status: true });
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

  async deleteAll() {
    try {
      await Items.deleteMany();
    } catch (error) {
      throw error;
    }
  }

  async restart() {
    try {
      await Items.deleteMany();

      const items = await fs.promises.readFile(restartFile, 'utf-8');
      const itemsArray = JSON.parse(items);

      const transformedItems = itemsArray.map((item) => new ItemDTO(item));

      await Items.insertMany(transformedItems);
    } catch (error) {
      throw error;
    }
  }
}

export default ItemManager;

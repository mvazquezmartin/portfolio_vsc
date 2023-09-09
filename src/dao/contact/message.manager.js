const Messages = require("./model/message.model");

class MessageManager {
  async create(message) {
    try {
      const data = await Messages.create(message);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const data = await Messages.find();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteAll() {
    try {
      await Messages.deleteMany();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MessageManager;

import Messages from"./model/message.model.js";

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

export default MessageManager;

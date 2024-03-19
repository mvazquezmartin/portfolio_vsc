import HTTP_STATUS_CODES from '../constants/htpp-status-code.constants.js';
import MessageManager from '../dao/contact/message.manager.js';

class MessageService {
  constructor() {
    this.messageManager = new MessageManager();
  }

  async getAll() {
    try {
      const data = await this.messageManager.getAll();
      if (data.length === 0) {
        return {
          code: HTTP_STATUS_CODES.NOT_FOUND,
          status: 'error',
          message: 'There is not messages',
          payload: [],
        };
      }
      return {
        code: HTTP_STATUS_CODES.OK,
        status: 'success',
        message: 'All messages found',
        payload: data,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(message) {
    try {
      const data = await this.messageManager.create(message);
      return {
        code: HTTP_STATUS_CODES.CREATED,
        status: 'success',
        message: 'Message created successfully',
        payload: data,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteAll() {
    try {
      await this.messageManager.deleteAll();
      return {
        code: HTTP_STATUS_CODES.OK,
        status: 'success',
        messages: 'All messages ware deleted',
        payload: [],
      };
    } catch (error) {
      throw error;
    }
  }
}

export default new MessageService();

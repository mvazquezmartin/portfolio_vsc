const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");
const CRUDContext = require("../dao/crud.context");

class ItemService {
  constructor() {
    this.itemManager;
  }

  getPersistence(persistence) {
    this.itemManager = CRUDContext.strategyChange(persistence);
  }

  async getAll() {
    try {
      const data = await this.itemManager.getAll();

      if (data.length === 0) {
        return {
          code: HTTP_STATUS_CODES.NOT_FOUND,
          status: "error",
          message: "There are no items in the file",
          payload: [],
        };
      }

      return {
        code: HTTP_STATUS_CODES.OK,
        status: "success",
        message: "Items found",
        payload: data,
      };
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id) {
    try {
      const data = await this.itemManager.getOneById(id);

      if (!data)
        return {
          code: HTTP_STATUS_CODES.NOT_FOUND,
          status: "error",
          message: "No item found with that id",
          payload: [],
        };

      return {
        code: HTTP_STATUS_CODES.OK,
        status: "success",
        message: "Item find",
        payload: data,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(iten) {
    try {
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const data = await this.itemManager.delete(id);

      if (data.length === 0)
        return {
          code: HTTP_STATUS_CODES.NOT_FOUND,
          status: "error",
          message: "No item found with that id",
          payload: [],
        };

      return {
        code: HTTP_STATUS_CODES.OK,
        status: "success",
        message: "Item delete",
        payload: data,
      };
    } catch (error) {
      throw error;
    }
  }

  async restart() {
    try {
      await this.itemManager.restart();
      return {
        code: HTTP_STATUS_CODES.OK,
        status: "succes",
        message: "Items restart to orinal file",
        payload: [],
      };
    } catch (error) {
      throw error;
    }
  }
}

const itemService = new ItemService();

module.exports = itemService;
// const itemService = {
//   setStrategy: (persistence) => {
//     const itemManager = PersistenceContext.strategyChange(persistence);
//   },

//   getAll: async (persistenceOption) => {
//     try {
//       const storage = persistence(persistenceOption);
//       const data = await storage.getAll();

//       if (data.length === 0) {
//         return {
//           status: "error",
//           message: "there are no items in the file",
//           payload: {},
//         };
//       }

//       return { status: "success", message: "items found", payload: data };
//     } catch (error) {
//       throw error;
//     }
//   },

//   create: async (item) => {
//     try {
//       const data = 0;
//     } catch (error) {
//       throw error;
//     }
//   },

//   deleteOne: async (persistenceOption, id) => {
//     const storage = persistence(persistenceOption);
//     const data = await storage.delete(id);

//     if (data.length === 0) {
//       return { status: "error", message: "item not found", payload: data };
//     }
//     return {
//       status: "success",
//       message: "item deleted successfully",
//       payload: data,
//     };
//   },
// };

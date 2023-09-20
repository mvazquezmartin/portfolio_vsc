const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");
const CRUDContext = require("../dao/crud.context");
const { validId, validIdFs } = require("../utils/isValidId");

class ItemService {
  constructor() {
    this.itemManager;
  }

  setPersistence(persistence) {
    this.itemManager = CRUDContext.strategyChange(persistence);
  }

  async getAll() {
    try {
      const data = await this.itemManager.getAll();

      if (!data) {
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
      if (!(validId(id) || validIdFs(id)) || id === "invalid") {
        return {
          code: HTTP_STATUS_CODES.BAD_REQUEST,
          status: "error",
          message: "The ID is invalid",
          payload: [],
        };
      }

      const data = await this.itemManager.getOneById(id);

      console.log(data);

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
      console.log(error);
      throw error;
    }
  }

  async create(item) {
    try {
      const data = await this.itemManager.create(item);

      return {
        code: HTTP_STATUS_CODES.OK,
        status: "success",
        message: "The item was added successfully",
        payload: data,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(id, update) {
    try {
      if (!(validId(id) || validIdFs(id))) {
        return {
          code: HTTP_STATUS_CODES.BAD_REQUEST,
          status: "error",
          message: "The ID is invalid",
          payload: [],
        };
      }

      const item = await this.itemManager.getOneById(id);

      if (!item) {
        return {
          code: HTTP_STATUS_CODES.NOT_FOUND,
          status: "error",
          message: "No item found with that id",
          payload: [],
        };
      }

      Object.keys(update).forEach((key) => {
        if (update[key] && update[key] !== item[key]) item[key] = update[key];
      });

      const data = await this.itemManager.update(id, item);

      return {
        code: HTTP_STATUS_CODES.OK,
        status: "success",
        message: "Item successfully modified",
        payload: data,
      };
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      if (!(validId(id) || validIdFs(id))) {
        return {
          code: HTTP_STATUS_CODES.BAD_REQUEST,
          status: "error",
          message: "The ID is invalid",
          payload: [],
        };
      }

      const data = await this.itemManager.delete(id);

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
        message: "Item delete",
        payload: data,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteAll() {
    try {
      const data = await this.itemManager.getAll();
      if (!data) {
        return {
          code: HTTP_STATUS_CODES.NOT_FOUND,
          status: "error",
          message: "There are no items in the file",
          payload: [],
        };
      }

      await this.itemManager.deleteAll();

      return {
        code: HTTP_STATUS_CODES.OK,
        status: "success",
        message: "All items were removed",
        payload: [],
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
        status: "success",
        message: "Items restart to orinal file",
        payload: [],
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ItemService();

// failed attempt with factory pattern to change persistence at runtime
//
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

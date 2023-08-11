const persistence = require("../dao/factory.dao");

const itemService = {
  getAll: async (persistenceOption) => {
    const storage = persistence(persistenceOption);
    const data = await storage.getAll();

    if (data.length === 0) {
      return {
        status: "error",
        message: "there are no items in the file",
        payload: {},
      };
    }

    return { status: "success", message: "items found", payload: data };
  },

  deleteOne: async (persistenceOption, id) => {
    const storage = persistence(persistenceOption);
    const data = await storage.delete(id);
    
    if (data.length === 0) {
      return { status: "error", message: "item not found", payload: data };
    }
    return {
      status: "success",
      message: "item deleted successfully",
      payload: data,
    };
  },
};

module.exports = itemService;

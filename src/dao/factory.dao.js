const path = require("path");

const fsStorage = path.join(__dirname, "./fileSystem/file/item.storage.json");

const persistence = (persistenceOption) => {
  switch (persistenceOption) {
    case "filesystem":
      const ItemManager = require("./fileSystem/items.manager.fs");
      return new ItemManager(fsStorage);

    case "localstorage":
      break;

    case "mongo":
      break;

    default:
      throw new Error("environment error", persistenceOption);
  }
};

module.exports = persistence;

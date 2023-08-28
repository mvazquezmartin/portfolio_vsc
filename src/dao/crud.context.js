const path = require("path");
const CRUDStrategy = require("./crud.stratagy");
const FileSystemStrategy = require("./fileSystem/items.manager.fs");
const MongoDBStrategy = require("./mongodb/item.manager.mongo");

const fileItems = path.join(__dirname, "./fileSystem/file/item.storage.json");

class CRUDContext {
  constructor() {
    this.strategies = {};
  }

  strategyChange(strategyType) {
    if (!this.strategies[strategyType]) {
      switch (strategyType) {
        case "mongodb":
          this.strategies[strategyType] = new CRUDStrategy(
            new MongoDBStrategy()
          );
          break;

        case "filesystem":
          this.strategies[strategyType] = new CRUDStrategy(
            new FileSystemStrategy(fileItems)
          );
          break;

        // case "localstorage":
        //   this.strategies[strategyType] = new CRUDStrategy(
        //     new LocalStorageStrategy()
        //   );
        //   break;

        default:
          throw new Error("Strategy not supported");
      }
    }
    return this.strategies[strategyType];
  }
}

const PersistenceContext = new CRUDContext();

module.exports = PersistenceContext;

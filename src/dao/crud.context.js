import path from 'path';
import CRUDStrategy from './crud.stratagy.js';
import FileSystemStrategy from './fileSystem/items.manager.fs.js';
import MongoDBStrategy from './mongodb/item.manager.mongo.js';
import __dirname from '../utils/dirname.util.js';

const fileItems = path.join(__dirname, './fileSystem/file/item.storage.json');

class CRUDContext {
  constructor() {
    this.strategies = {};
  }

  strategyChange(strategyType) {
    if (!this.strategies[strategyType]) {
      switch (strategyType) {
        case 'mongodb':
          this.strategies[strategyType] = new CRUDStrategy(
            new MongoDBStrategy()
          );
          break;

        case 'filesystem':
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
          throw new Error('Strategy not supported');
      }
    }
    return this.strategies[strategyType];
  }
}

const PersistenceContext = new CRUDContext();

export default PersistenceContext;

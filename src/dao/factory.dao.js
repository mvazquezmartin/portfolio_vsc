import path from 'path';

const fsStorage = path.join(process.cwd(), '/fileSystem/file/item.storage.json');

const persistence = (persistenceOption) => {
  switch (persistenceOption) {
    case 'filesystem':
      const ItemManager = require('./fileSystem/items.manager.fs');
      return new ItemManager(fsStorage);

    case 'localstorage':
      break;

    case 'mongo':
      break;

    default:
      throw new Error('environment error', persistenceOption);
  }
};

export default persistence;

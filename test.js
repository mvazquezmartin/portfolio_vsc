class PersistenceStrategy {
  constructor(strategy) {
    this.strategy = strategy;
  }

  create(data) {
    return this.strategy.create(data);
  }

  read(id) {
    return this.strategy.read(id);
  }

  update(id, data) {
    return this.strategy.update(id, data);
  }

  delete(id) {
    return this.strategy.delete(id);
  }
}

class StrategyContext {
  constructor() {
    this.strategies = {};
  }

  strategyChange(strategyType) {
    if (!this.strategies[strategyType]) {
      switch (strategyType) {
        case "mongodb":
          this.strategies[strategyType] = new PersistenceStrategy(
            new MongoDBStrategy()
          );
          break;
        case "filesystem":
          this.strategies[strategyType] = new PersistenceStrategy(
            new FileSystemStrategy()
          );
          break;
        case "localstorage":
          this.strategies[strategyType] = new PersistenceStrategy(
            new LocalStorageStrategy()
          );
          break;
        default:
          throw new Error("Strategy not supported");
      }
    }
    return this.strategies[strategyType];
  }
}

app.get("/items", (req, res) => {
  const strategyType = req.query.persistence;
  const strategyContext = new StrategyContext();
  const persistenceStrategy = strategyContext.strategyChange(strategyType);
});

class CRUDStrategy {
  constructor(strategy) {
    this.strategy = strategy;
  }

  getAll() {
    return this.strategy.getAll();
  }

  create(data) {
    return this.strategy.create(data);
  }

  getOneById(id) {
    return this.strategy.getOneById(id);
  }

  update(id, data) {
    return this.strategy.update(id, data);
  }

  delete(id) {
    return this.strategy.delete(id);
  }

  deleteAll() {
    return this.strategy.deleteAll();
  }

  restart() {
    return this.strategy.restart();
  }
}

module.exports = CRUDStrategy;

class ItemDTO {
  constructor(item) {
    this.title = item.title;
    this.description = item.description;
    this.category = item.category;
    this.image = item.image;
    this.price = item.price;
    this.stock = item.stock;
  }
}

module.exports = ItemDTO;

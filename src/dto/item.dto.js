class ItemDTO {
  constructor(item) {
    this.title = item.title;
    this.description = item.description;
    this.category = item.category;
    this.image = item.image;
    this.price = Number(item.price);
    this.stock = Number(item.stock);
  }
}

export default ItemDTO;

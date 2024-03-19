import mongoose from 'mongoose';

const itemsCollection = 'items';

const itemsSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  image: String,
  price: Number,
  stock: Number,
  status: { type: Boolean, default: true },
});

const Items = mongoose.model(itemsCollection, itemsSchema);

export default Items;

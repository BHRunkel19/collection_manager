const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  brand: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  available: {type: Boolean}
});

// create a model for a food item
const food = mongoose.model('food', foodSchema);

module.exports = food;

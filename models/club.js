const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clubSchema = new Schema({
  brand: { type: String, required: true },
  category: { type: String, required: true },
  custom: { type: Boolean },
  price: { type: Number, required: true },
  materials: []
});

// create a model for a club
const club = mongoose.model('club', clubSchema);

module.exports = club;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clubSchema = new Schema({
  clubBrand: { type: String, required: true },
  clubType: { type: String, required: true },
  clubCustom: { type: Boolean },
  clubPrice: { type: Number, required: true },
  clubMaterials: []
});

// create a model for a club
const club = mongoose.model('club', clubSchema);

module.exports = club;

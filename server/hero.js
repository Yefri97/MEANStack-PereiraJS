const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var heroSchema = new Schema({
  name: String,
  health: Number,
  velocity: Number,
  damage: Number,
  image: String,
});

const Hero = mongoose.model('heroes', heroSchema);

module.exports = Hero;

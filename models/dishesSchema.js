const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishes = new Schema(
  {
    id: Number,
    name: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);

const Dishes = mongoose.model("Dishes", dishes);
module.exports = Dishes;

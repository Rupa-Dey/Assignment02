const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const promotionSchema = new Schema({

    id : Number,
    name: String,
    image: String,
    description: String,
},
{timestamps: true}
);
const Promotion = mongoose.model("dishes",promotionSchema);

module.exports = Promotion;

const mongoose = require("mongoose");
const { ObjectId } = require('bson');

const CartSchema = new mongoose.Schema(
	{
        products: [{
            product: {
                type: ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
                required: true
            }
        }]
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
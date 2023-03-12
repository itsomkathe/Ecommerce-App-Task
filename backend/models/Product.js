const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		image: { 
			type: String, 
		},
		categories: [{
			type: String
		}],
        price: {
            type: Number,
            required: true
        }
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
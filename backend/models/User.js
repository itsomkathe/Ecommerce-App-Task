const mongoose = require('mongoose');
const { ObjectId } = require('bson');

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: { 
			type: String, 
			required: true 
		},
		cart: { 
			type: ObjectId, 
			ref: "Cart" 
		},
		address: [{ 
			type: String, 
		}],
		orders: [{ 
			type: ObjectId, 
			ref: "Order" 
		}]
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

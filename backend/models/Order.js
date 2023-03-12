const mongoose = require('mongoose');
const { ObjectId } = require('bson');

const OrderSchema = new mongoose.Schema(
    {
	    userId: {
	    	type: ObjectId,
	    	ref: 'User',
	    	required: true,
	    },
	    products: [
	    	{
	    		product: {
	    			type: ObjectId,
	    			ref: 'Product',
	    			required: true,
	    		},
	    		quantity: {
	    			type: Number,
	    			default: 1,
	    			required: true,
	    		},
	    	},
	    ],
	    amount: {
	    	type: Number,
	    	required: true,
	    },
	    address: {
	    	type: String,
	    	required: true,
	    }
    }
);

module.exports = mongoose.model("Order", OrderSchema);

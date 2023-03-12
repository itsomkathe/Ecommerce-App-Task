const OrderModel = require('../models/Order');
const UserModel = require("../models/User");

class OrderService {
	async createOrder(payload) {
		const { products, amount, address, userId } = payload;
		try {
			const order = await OrderModel.create({
				products,
				amount,
				address,
				userId,
			});

            const orderId = order._id;

            const user = await UserModel.findByIdAndUpdate(
                userId,
                {$push: {"orders": orderId}},
                {safe: true, upsert: true, new : true}
            );

			return order;
		} catch (err) {
			return new Error(err.message);
		}
	}

	async addToCart(payload) {
		const { cartId, productId, quantity } = payload;
		try {
			const cart = await CartModel.findByIdAndUpdate(
				cartId,
				{
					$push: {
						products: {
							product: productId,
							quantity,
						},
					},
				},
				{ safe: true, upsert: true, new: true }
			).select('products');
			return cart;
		} catch (err) {
			return new Error(err.message);
		}
	}

	async deleteFromCart(payload) {
		const { cartId, productId } = payload;
		try {
			const cart = await CartModel.findByIdAndUpdate(
				cartId,
				{
					$pull: {
						products: {
							product: productId,
						},
					},
				},
				{ safe: true, upsert: true, new: true }
			).select('products');
			return cart;
		} catch (err) {
			return new Error(err.message);
		}
	}
}

module.exports = new OrderService();

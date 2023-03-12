const OrderService = require("../services/orderService");;

class OrderController{
    async createOrder(req, res) {
		const { products, amount, address } = req.body;
        const { id } = req.user;

		if (!products[0] || !amount || !address) {
			return res.status(400).json({ error: 'All fields are required!' });
		}

		try {
			const order = await OrderService.createOrder({
				products, amount, address, userId: id
			});

			res.json(order);
		} catch (err) {
			console.log(err);
			res.status(400).json({
				error: err.message ? err.message : 'Internal Server Error',
			});
		}
	}

}

module.exports = new OrderController();
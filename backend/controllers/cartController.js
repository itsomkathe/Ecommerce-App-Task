const CartService = require("../services/cartService");

class CartController{
	async getCart(req, res) {
		const cartId = req.params.id;
		try{
			const cart = await CartService.getCart({ cartId });
			res.json(cart);
		}catch(err){
			console.log(err);
			res.status(400).json({
				error: err.message ? err.message : 'Internal Server Error',
			});
		}
	}

    async addToCart(req, res) {
		const { productId, quantity } = req.body;

		const cartId = req.params.id;

		if (!productId || !cartId) {
			return res.status(400).json({ error: 'All fields are required!' });
		}
		try {
			const product = await CartService.addToCart({
				productId, cartId, quantity
			});

			res.json(product);
		} catch (err) {
			console.log(err);
			res.status(400).json({
				error: err.message ? err.message : 'Internal Server Error',
			});
		}
	}

    async deleteFromCart(req, res) {
		const { productId } = req.body;
        const cartId = req.params.id;

		if (!productId || !cartId) {
			return res.status(400).json({ error: 'All fields are required!' });
		}
		try {
			const product = await CartService.deleteFromCart({
				productId, cartId
			});

			res.json(product);
		} catch (err) {
			console.log(err);
			res.status(400).json({
				error: err.message ? err.message : 'Internal Server Error',
			});
		}
	}

	async emptyCart(req, res){
		const cartId = req.params.id;
		try {
			const cart = await CartService.emptyCart({cartId});
			res.json(cart);
		} catch (err) {
			console.log(err);
			res.status(400).json({
				error: err.message ? err.message : 'Internal Server Error',
			});
		}
	}
}

module.exports = new CartController();
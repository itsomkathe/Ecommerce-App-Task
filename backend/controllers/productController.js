const ProductService = require('../services/productService');
const categories = require('../static/categories');

class ProductController {
	getCategories(req, res) {
		try {
			return res.json(categories);
		} catch (err) {
			console.log(err);
			res.status(400).json({
				error: err.message ? err.message : 'Internal Server Error',
			});
		}
	}

	async addProduct(req, res) {
		const { name, description, price, categories } = req.body;

		if (!name || !price) {
			return res.status(400).json({ error: 'All fields are required!' });
		}
		try {
			const product = await ProductService.addProduct({
				name,
				description,
				price,
				categories,
			});

			res.json(product);
		} catch (err) {
			console.log(err);
			res.status(400).json({
				error: err.message ? err.message : 'Internal Server Error',
			});
		}
	}

	async getAllProducts(req, res) {
		try {
			const category = req.query.category;
			if (category) {
				const products = await ProductService.getProducts({
					categories: {
						$in: [category],
					},
				});
				res.json(products);
			} else {
				const products = await ProductService.getProducts();
				res.json(products);
			}
		} catch (err) {
			console.log(err);
			res.status(400).json({
				error: err.message ? err.message : 'Internal Server Error',
			});
		}
	}

	async getProductById(req, res) {
		try {
			const product = await ProductService.getProductById(req.params.id);
			res.json(product);
		} catch (err) {
			console.log(err);
			res.status(400).json({
				error: err.message ? err.message : 'Internal Server Error',
			});
		}
	}
}

module.exports = new ProductController();

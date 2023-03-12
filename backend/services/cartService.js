const CartModel = require('../models/Cart');

class CartService{
    async createCart(){
        try{
            const cart = await CartModel.create({});
            return cart;
        }catch(err){
            return new Error(err.message);
        }
    }

    async getCart(payload){
        const { cartId } = payload;
        try{
            const cart = await CartModel.findById(cartId).select("products").populate("products.product");
            return cart;
        }catch(err){
            return new Error(err.message);
        }
    }

    async addToCart(payload){
        const { cartId, productId, quantity } = payload;
        try{
            const cart = await CartModel.findByIdAndUpdate(
                cartId,
                {$push: {"products": {
                    product: productId,
                    quantity
                }}},
                {safe: true, upsert: true, new : true}
            ).select("products");
            return cart;
        }catch(err){
            return new Error(err.message);
        }
    }

    async deleteFromCart(payload){
        const { cartId, productId } = payload;
        try{
            const cart = await CartModel.findByIdAndUpdate(
                cartId,
                {$pull: {"products": {
                    product: productId,
                }}},
                {safe: true, upsert: true, new : true}
            ).select("products").populate("products.product")
            return cart;
        }catch(err){
            return new Error(err.message);
        }
    }

    async emptyCart(payload){
        const { cartId } = payload;
        try{
            const cart = await CartModel.findByIdAndUpdate(
                cartId,
                {$set: {"products": []}},
                {safe: true, upsert: true, new : true}
            ).select("products").populate("products.product")
            return cart;
        }catch(err){
            return new Error(err.message);
        }
    }
}

module.exports = new CartService();
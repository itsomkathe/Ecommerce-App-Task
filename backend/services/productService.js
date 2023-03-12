const fs = require("fs");
const ProductModel = require("../models/Product");

class ProductService{
    async addProduct(payload){
        const { name, description, price, categories } = payload;
        try{
            const product = await ProductModel.create({
                name,
                description,
                price,
                categories
            });
            return product;
        }catch(err){
            console.log(err)
            return new Error(err.message);
        }
    }

    async getProducts(condition){
        try{
            const products = await ProductModel.find(condition)
            return products;
        }catch(err){
            console.log(err);
            return new Error(err.message);
        }
    }

    async getProductById(id){
        try{
            const product = await ProductModel.findById(id);
            return product;
        }catch(err){
            console.log(err);
            return new Error(err.message);
        }
    }

    addPhoto(image){
        const imagePath = `${Date.now()}-${Math.round(
            Math.random()*1e9
        )}.png`;

        const base64Data = image.replace(/^data:([A-Za-z-+/]+);base64,/, '');

        try{
            fs.writeFileSync(path.resolve(__dirname, `../storage/${imagePath}`), base64Data,  {encoding: 'base64'});
            return imagePath;
        }catch(err){
            res.status(401).json({error: err.message ? err.message : "Internal Server Error"});
        }
    }

}

module.exports = new ProductService();
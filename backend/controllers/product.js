 
const Product = require('../models/product');

exports.getProducts = async (req, res, next) => {

   const query = req.query.name ? {
        name: {
            $regex: req.query.name,
            $options: 'i'
        }
    } : {}
    const products = await Product.find(query);
    res.status(200).json({ message: "All products", products: products });
}

exports.getProductById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product found", product: product });
    } catch (error) {
        res.status(200).json({ message: "Product Not found" });
    }   
}

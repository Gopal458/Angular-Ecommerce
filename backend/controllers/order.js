
const OrderModel = require('../models/order');
const ProductModel = require('../models/product');

exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json({ message: "All orders", orders: orders });
    } catch (error) {
        next(error);
    }
}

exports.getOrderById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const order = await OrderModel.findById(id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order found", order: order });
    } catch (error) {
        next(error);
    }
}


exports.createOrder = async (req, res, next) => {
    try {
        const cartItems= req.body
        const amount=Number(cartItems.reduce((acc,item)=> (acc + item.product.price * item.qty),0)).toFixed(2);
        const status="pending"

        const order = await OrderModel.create({cartItems,amount,status});

        // Updating Product Stock
         cartItems.forEach(async (item) => {
            const product = await ProductModel.findById(item.product._id);

            console.log("Product found:", product);
            if (product) {
                product.stock -= item.qty;
                await product.save();
            }
        });


        res.status(201).json({ message: "Order created", order: order });
    } catch (error) {
        next(error);
    }
}
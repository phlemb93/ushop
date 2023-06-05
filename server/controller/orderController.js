const Order = require('../model/Order');


//GET ALL ORDERS
const get_all_orders = async (req, res) => {

    try {
        const orders = await Order.find().sort({createdAt: -1 });
        res.status(200).json(orders)

    } catch (error) {
        res.status(500).json(error)
    }
}

//ADD ORDER
const add_one_order = async (req, res) => {

    const orderDetails = {...req.body, userId: req.tokenData.id}

    try {
        const order = await Order.create(orderDetails);
        res.status(200).json(order);

    } catch (error) {
        res.status(500).json(error)
    }
}

//GET SINGLE ORDER
const get_one_order = async (req, res) => {

    const id = req.params.id;

    try {
        const orders = await Order.find({_id: id});
        res.status(200).json(orders);
  
    } catch (error) {
        
        res.status(500).json(error)
    }
}

//UPDATE SINGLE CART
const update_one_order = async (req, res) => {

    const id = req.params.id;

    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new:true });
        res.status(200).json(updatedOrder)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

//DELETE SINGLE ORDER
const delete_one_order = async (req, res) => {

    const id = req.params.id;

    try {
        await Order.findByIdAndDelete(id);
        res.status(200).json("Cart Deleted");
    
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { get_all_orders, add_one_order, get_one_order, update_one_order, delete_one_order }
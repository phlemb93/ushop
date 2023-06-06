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

//ADD AN ORDER
const add_one_order = async (req, res) => {

    try {
        const order = await Order.create(req.body);
        res.status(200).json(order);

    } catch (error) {
        res.status(500).json(error)
    }
}

//GET SINGLE ORDER
const get_one_order = async (req, res) => {

    const id = req.params.id;
    const tokenId = req.tokenData.id;
    const isAdmin = req.tokenData.isAdmin;

    try {
        const userId = await Order.findById(id).select(userId);

        if(userId === tokenId || isAdmin) { 
            const order = await Order.findById(id);
            res.status(200).json(orders);
        } else {
            res.status(400).json("You're not authorized")
        }
  
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET USER'S ORDERS
const get_user_orders = async (req, res) => {

    const userId = req.params.id;
    const tokenId = req.tokenData.id;
    const isAdmin = req.tokenData.isAdmin;
    
    try {

      if(userId === tokenId || isAdmin) { 
          const orders = await Order.find({ userId });
          res.status(200).json(orders)
      } else {
          res.status(400).json("You're not authorized")
      }
        
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE SINGLE ORDER
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

module.exports = { get_all_orders, add_one_order, get_one_order, get_user_orders, update_one_order, delete_one_order }
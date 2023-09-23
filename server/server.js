const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

//config
const app = express();
dotenv.config();

const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const cartRoute = require('./routes/cartRoute');
const orderRoute = require('./routes/orderRoute');
const stripeRoute = require('./routes/stripeRoute');


//middleware
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin: [],
//     methods:["POST", "GET", "PUT", "DELETE"],
//     credentials: true
// }));

//connect to DB
mongoose
.connect(process.env.MONGODB_URI, { dbName: 'ushop', useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {

    console.log("DB is connected");

    app.listen(process.env.PORT, () => {
        console.log("Server running on PORT " + process.env.PORT)
    })
})
   
//routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/checkout',stripeRoute)


module.exports = app;
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

//config
const app = express();
dotenv.config();

const authRoute = require('./route/authRoute');
const userRoute = require('./route/userRoute');
const productRoute = require('./route/productRoute');
const cartRoute = require('./route/cartRoute');
const orderRoute = require('./route/orderRoute');
const stripeRoute = require('./route/stripeRoute');


//middleware
app.use(cors());
app.use(express.json());

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




    
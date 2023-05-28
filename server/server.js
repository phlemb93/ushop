const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./route/authRoute');
const dotenv = require('dotenv');

//config
dotenv.config();
const app = express();

//middleware
app.use(express.json());

//connect to DB
mongoose
.connect(process.env.DB_URI, { dbName: 'ushop', useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {

    console.log("DB is connected");

    app.listen(process.env.PORT, () => {
        console.log("Backend server is running")
    })
})

   
//routes
app.use('/api/auth', authRoute)




    
// Three modules needed cor
require('dotenv').config()
const express  = require('express');
require('./DB/connection');
const routes = require('./Routes/router');
const userRoutes = require('./Routes/userRoutes');
const cors = require('cors');

const cartServer = express();
cartServer.use(cors());
cartServer.use(express.json());
cartServer.use(routes);
cartServer.use(userRoutes);
const PORT = 3000;

cartServer.listen(PORT,()=>{
    console.log("Cart server running in port:",PORT);
})

cartServer.get('/',(req, res)=>{
    res.send('<h3>Cart server running successfully in port 3000</h3>')
})


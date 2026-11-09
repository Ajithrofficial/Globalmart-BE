const carts = require('../Models/cartModel')
exports.addTocartController = async(req, res)=>{
    const userId = req.payload;
    const {id, title, price, description, category, image, rating, quantity, grandTotal} = req.body
    try{
        const existingProduct = await carts.findOne({id, userId});
        if(existingProduct){
            existingProduct.quantity +=1;
            existingProduct.grandTotal = existingProduct.quantity * existingProduct.price
        }
        else{
            const newProduct =  new carts({id, title, price, description, category, image, rating, quantity, grandTotal, userId});
            await newProduct.save();
            res.status(201).json(newProduct)
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}
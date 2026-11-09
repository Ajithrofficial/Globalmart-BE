const users = require('../Models/userModel');
// import jsonweb token
const jwt = require('jsonwebtoken')

// register
exports.registerController = async (req, res)=>{

    try{
        const {username, email, password} = req.body;
        console.log("Inside register controller", username, email, password);
        const existingUser = await users.findOne({email:email});
        if(existingUser){
            res.status(406).json("Account alraedy exist")
        }
        else{
            const newUser = new users({
                username:username,
                email:email,
                password:password
            });
            await newUser.save()
            res.status(201).json("Successfully created")
        }
       
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.loginController = async (req, res) =>{
    const {email, password} = req.body;
    try{
        const existingUser = await users.findOne({email, password});
        if(existingUser){
            const token = jwt.sign({userId: existingUser._id}, process.env.JWTSECRET);
            res.status(200).json(
                {existingUser, token }
                
            )
        }
        else{
            res.status(401).json("Invalid password or Email")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}
const mongoose = require('mongoose');
const connection_string=process.env.DATABASE;
mongoose.connect(connection_string).then((res)=>{
    console.log("MongoDb connected successfully");  
}).catch((err) => {
    console.log(err);
})
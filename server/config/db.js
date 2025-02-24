const mongoose = require("mongoose");

const connectDB = async() =>{
    try{
        conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to the database ${conn.connection.host}`);
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // make sure environment variables are loaded

const mongoUrl = process.env.MONGO_URL;
export const  connectDB = async () =>{

    await mongoose.connect(mongoUrl).then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
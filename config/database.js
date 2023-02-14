import mongoose from "mongoose";
import dotenv from "dotenv";
import 'colors'

dotenv.config();

const  connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bold);
    }
}

export default connectDB
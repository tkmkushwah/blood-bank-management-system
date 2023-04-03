import express from 'express';
import connectDB from './config/database.js'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import morgan from 'morgan'
import cors from 'cors'

dotenv.config();
connectDB();

const app = express();
app.use(express.json());  //handles JSON requests.
//middlewares
app.use(morgan("dev"));
app.use(cors());


app.use("/api/v1/user", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`.underline.grey);
})
import express from 'express'; 
import  connectDB  from './config/database.js'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import morgan from 'morgan'
dotenv.config();
connectDB();

const app = express();
app.use(express.json());  //handles JSON requests.
app.use(morgan("dev"));

app.use('/api/v1/user', userRoutes);

app.listen( process.env.PORT, () => {
console.log(`server listening on port ${process.env.PORT}`.underline.grey);
})
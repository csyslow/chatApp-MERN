import express, { json } from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

const app = express();
dotenv.config(); //makes .env file usable

const PORT_NO = process.env.PORT || 8000;


app.use(json()); //parse JSON request payload from req.body
app.use('/api/auth', authRoutes);


mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(PORT_NO, () =>{
            console.log(`Connected to PORT ${PORT_NO}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

mongoose.connection.once("open", () => {
    console.log('Connected to MongoDB');
})
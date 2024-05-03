import express, { json } from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
dotenv.config(); //makes .env file usable

const PORT_NO = process.env.PORT || 8000;

app.use(json()); //parse JSON request payload from req.body
app.use(cookieParser()); //parse incoming cookies in req.cookies
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(PORT_NO, () =>{
            console.log(`Connected to PORT ${PORT_NO}`);
        })
    })
    .catch((err) => {
        console.log(err);
    });

mongoose.connection.once("open", () => {
    console.log('Connected to MongoDB');
});
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { carRouter } from './src/routes/cars.js'

const app = express();
const port = process.env.PORT || 3002

/* MIDDLEWARE */
app.use(express.json());
app.use(cors());

app.use("/cars", carRouter);

/* MONGODB CONNECTION */
mongoose.connect("mongodb+srv://tangch3:tangch3@cluster0.g2j35z4.mongodb.net/carInventory?retryWrites=true&w=majority");


app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`))
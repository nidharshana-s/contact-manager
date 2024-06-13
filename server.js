import express from "express";
import 'dotenv/config';
import contactRoutes from './routes/contactRoutes.js';
import error_hand from "./middlewares/errorHandler.js";

const app=express();
const port=process.env.PORT;

app.use(express.json());
app.use("/api/contacts",contactRoutes);
app.use(error_hand); //error handler

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})


import express from "express";
import path from 'path';
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter";
import authRouter from "./routes/authRouter";

dotenv.config();

const MONGO_URI = `mongodb://${process.env.DB_USER}:${process.env.DBPASSWORD}@localhost/mutualhelp`;

const conection = async () =>{
    try{
        await mongoose.connect(MONGO_URI,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useFindAndModify:true,
            useUnifiedTopology:true,
            });
            console.log("db is conected");
    }catch(Error){
        console.log(Error);
    }
};
conection();
const app = express();
app.use(express.json());
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.listen(7000, ()=>console.log("app runing on port 7000"));

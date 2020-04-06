import express from "express";
import path from 'path';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter";
import authRouter from "./routes/authRouter";
import topicRouter from "./routes/topicRouter";
import tagRouter from "./routes/tagRouter";

class Server{
    constructor(){
        dotenv.config();
        this.app = express();
        this.conection();
        this.config();
        this.routes();

    }

    async conection(){
        const MONGO_URI = `mongodb://${process.env.DB_USER}:${process.env.DBPASSWORD}@localhost/mutualhelp`;
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
    }

    config(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use('/api/user',userRouter);
        this.app.use('/api/auth',authRouter);
        this.app.use('/api/topic',topicRouter);
        this.app.use('/api/tag',tagRouter);
    }
    start(){
        const server = this.app.listen(7000, ()=>console.log("app runing on port 7000"));
        return server;
    }
}

const server = new Server();
export default server;





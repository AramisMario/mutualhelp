import {Router} from "express";
import  UserController from "../controllers/userController";
class UserRouter{

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/users',UserController.getUsers);
    }

}

const userRouter = new UserRouter();
export default userRouter.router;
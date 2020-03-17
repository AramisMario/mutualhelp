import {Router} from "express";
import  UserController from "../controllers/userController";
import userController from "../controllers/userController";
class UserRouter{

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/users',UserController.getUsers);
        this.router.post('/addMate',userController.addMate);
    }

}

const userRouter = new UserRouter();
export default userRouter.router;
import {Router} from "express";
import userController from "../controllers/userController";
class UserRouter{

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/users',userController.getUsers);
        this.router.post('/addMate',userController.addMate);
        this.router.get('/searchUsers/:userQuery',userController.searchUsers);
    }

}

const userRouter = new UserRouter();
export default userRouter.router;
import {Router} from "express";
import userController from "../controllers/userController";
import verifyToken from "../middleware/verifyToken";
class UserRouter{

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/users',userController.getUsers);
        this.router.post('/addMate',userController.addMate);
        this.router.get('/searchUsers/:userQuery',userController.searchUsers);
        this.router.post('/friendRequest',userController.sendFriendRequest);
        this.router.post('/addInfo',verifyToken,userController.addUserInfo);
    }

}

const userRouter = new UserRouter();
export default userRouter.router;
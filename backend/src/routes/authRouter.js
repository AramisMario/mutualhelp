import {Router} from "express";
import authController from "../controllers/authController";
class AuthRouter{
    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.post('/signUp',authController.signUp.bind(authController));
        this.router.post('/signIn',authController.signIn.bind(authController));
    }
}
const authRouter = new AuthRouter();
export default authRouter.router
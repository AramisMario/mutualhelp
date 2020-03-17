import {Router} from "express";
import tagController from "../controllers/tagController";
class TagRouter{

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.post('/createTag',tagController.createTag);
    }

}

const tagRouter = new TagRouter();
export default tagRouter.router;
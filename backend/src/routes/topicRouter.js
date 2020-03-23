import {Router} from "express";
import topicController from "../controllers/topicController";

class TopicRouter{

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.post('/createTopic',topicController.createTopic);
        this.router.post('/addTag',topicController.addTag);
        this.router.get('/searchTopic/:topicQuery',topicController.searchTopic);
    }
}

const topicRouter = new TopicRouter();
export default topicRouter.router;
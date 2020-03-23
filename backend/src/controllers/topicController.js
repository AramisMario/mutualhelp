import Topics from "../models/topics";
class TopicController{

    async createTopic(req,res){
        const {topic, tags} = req.body;
        let newTopic;
            if(tags !== undefined){
                newTopic = Topics({
                    topic,
                    tags,
                });
            }else{
                newTopic = Topics({
                    topic,
                });
            };
            try{
                const createdTopic = await newTopic.save();
                res.json(createdTopic);
            }catch(Error){
                console.log(Error.message);
                res.json({"message":"error"});
            }  
    }

    async addTag(req, res){
        const {topic,tag} = req.body;
        try{
            const untaggedTopic = await Topics.findOne({topic:topic});
            untaggedTopic.tags.push(tag);
            const taggedTopic = await untaggedTopic.save();
            res.json(taggedTopic);
        }catch(Error){
            console.log(Error.message);
            res.json({"message":"Error"});
        }
        
    }

    async searchTopic(req, res){
        const {topicQuery} = req.params;
        const regex = new RegExp(`^${topicQuery}`,'i');
        const topics = await Topics.find({topic:regex});
        res.json(topics);
    }
}

const topicController = new TopicController();
export default topicController;
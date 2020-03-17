import Tags from "../models/tags";

class TagController{

    async createTag(req, res){
        const {tag} = req.body;
        const newTag = Tags({
            tag,
        });
        try{
            const createdTag = await newTag.save();
            res.json(createdTag);
        }catch(Error){
            res.json({"message":"error"});
        }
    }
}

const tagController = new TagController();
export default tagController;
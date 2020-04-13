import Users from "../models/user";

class UserController{

    constructor(){

    }
    

    async getUsers(req,res){
        const users = await Users.find();
        res.json(users);   
    }

    async addMate(req,res){
        const {email,mateId} = req.body;
        const user = await Users.findOne({email:email});
        user.mates.push(mateId);
        const updated = await user.save();
        res.json(updated);
    }

    async searchUsers(req, res){
        const {userQuery} = req.params;
        const noSpaces = userQuery.replace(/ /g,"");
        const regex = new RegExp(`${noSpaces}`,'i');
        const users = await Users.find({$or:[{firstname:regex},{lastname:regex},{username:regex}]});
        res.json(users);
    }

    async sendFriendRequest(req,res){
        const {username,myId} = req.body;
        const me = await Users.findOne({_id:myId}).select("sentFRequest");
        const userAsked = await Users.findOne({username:username}).select("username firstname lastname receivedFRequest");
        me.sentFRequest.push(userAsked._id); 
        userAsked.receivedFRequest.push(myId);
        await userAsked.save();
        await me.save();
        res.json({"message":"solicitud enviada"});
    }
}

const userController = new UserController();

export default userController;
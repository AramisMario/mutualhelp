import Users from "../models/user";
import mongoose, { mongo } from "mongoose";
import Topics from "../models/topics";
class UserController{

    constructor(){

    }
    

    async getUsers(req,res){
        const users = await Users.find();
        res.json(users);   
    }

    async addMate (req,res){
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
        const me = await Users.findById({_id:myId}).select("sentFRequest");
        const userAsked = await Users.findOne({username:username}).select("username firstname lastname receivedFRequest");
        me.sentFRequest.push(userAsked._id); 
        userAsked.receivedFRequest.push(myId);
        await userAsked.save();
        await me.save();
        res.json({"message":"solicitud enviada"});
    }

    async addUserInfo(req,res){
        const usuario = await Users.findById({_id:req.userId});
        const skill = await Topics.findOne({topic:req.body.skill});
        const weakness = await Topics.findOne({topic:req.body.weakness});
        console.log(skill);
        console.log(weakness);
        usuario.skills.push(skill._id);
        usuario.weaknesses.push(weakness._id);
        usuario.description = req.body.description;
        await usuario.save();
        res.status(200).json({"message":"informacion actualizada"});
    }
}

const userController = new UserController();

export default userController;
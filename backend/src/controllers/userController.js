import Users from "../models/user";
import server from "../index";
import SocketIO from "socket.io";
class UserController{

    constructor(){
        this.io = SocketIO(server);
    }
    

    async getUsers(req,res){
        const users = await Users.find();
        this.io.on('connection',(socket)=>{
            socket.on('testing',(data)=>{
                this.io.sockets.emit('emiting',data);
            })
        });
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
}

const userController = new UserController();

export default userController;
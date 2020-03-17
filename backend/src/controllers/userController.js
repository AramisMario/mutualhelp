import Users from "../models/user";


class UserController{

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
}

const userController = new UserController();

export default userController;
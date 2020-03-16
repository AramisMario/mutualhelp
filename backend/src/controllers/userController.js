import Users from "../models/user";


class UserController{

    async getUsers(req,res){
        const users = await Users.find();
        res.json(users);
    }
}

const userController = new UserController();

export default userController;
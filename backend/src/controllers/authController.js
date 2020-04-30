import Users from "../models/user";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

class AuthController{
    generateToken(id, email){
        const payload = {
            id:id,
            email:email
        }

        if(process.env.JWTKEY !== undefined){
            const token = jwt.sign(payload,process.env.JWTKEY,{"expiresIn":'10m'});
            return token;
        }else{
            return {"message":"key undefined"};
        }
    }

     async signUp(req,res){
            const {
                firstname, 
                lastname,
                username,
                email,
                password
                } = req.body;

                const newUser = Users({
                    firstname, 
                    lastname,
                    username,
                    email,
                    password
                });
                    try{
                        newUser.password = await newUser.encryptPassword(newUser.password);
                        const createdUser = await newUser.save();
                        const token = this.generateToken(createdUser._id, createdUser.email);
                        console.log(createdUser);
                        res.json({"token":token});
                    }catch(Error){
                        console.log(Error);
                        res.json({"message":"error"});
                    }  
                            
    }

    async signIn(req,res){
        const {email,password} = req.body;
        try{
            const user = await Users.findOne({email:email});
            if(await user.validatePassword(password)){
                const token = this.generateToken(user._id, user.email);
                res.json({"token":token});
            }else{
                res.json({"message":"incorrect password"});
            }
        }catch{
            res.json({"message":"user not found"});
        }
        
    }
}

const authController = new AuthController();
export default authController;
import {Schema, model} from "mongoose";
import Bcrypt from "bcrypt";
const userSchema = new Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    username:{type:String,required:true, unique:true},
    email:{type:String,required:true, unique:true},
    password:{type:String, required:true},
    description:{type:String},
    weaknesses:[{
        type:Schema.Types.ObjectId,
        ref:'Topics',
    }],
    skills:[{
        type:Schema.Types.ObjectId,
        ref:'Topics',
    }],
    mates:[{
        type:Schema.Types.ObjectId,
        ref:'Users',
    }],
    receivedFRequest:[{
        type:Schema.Types.ObjectId,
        ref:'Users',
    }],
    sentFRequest:[{
        type:Schema.Types.ObjectId,
        ref:'Users'
    }]
});

userSchema.methods.encryptPassword = async (password) =>{
    const salto = await Bcrypt.genSalt(10);
    return Bcrypt.hash(password,salto);
}

userSchema.methods.validatePassword = async function(password){
    try{
        return await Bcrypt.compare(password,this.password);
    }catch(error){
        console.log(error);
    }

}

export default model('Users',userSchema);
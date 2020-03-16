import {schema, Schema, model} from "mongoose";

const userSchema = new Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String, required:true},
    description:{type:String, required:true},
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
    }]
});

export default model('Users',userSchema);
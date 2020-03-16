import {Schema, model} from "mongoose";

const tagSchema = new Schema({
    tag:{type:String, required:true, unique:true}
});

export default model('Tags',tagSchema);
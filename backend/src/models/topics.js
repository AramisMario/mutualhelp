import {Schema, model} from "mongoose";

const topicSchema = new Schema({
    topic:{type:String, required:true, unique:true},
    tags:[{
        type:Schema.Types.ObjectId,
        ref:'Tags',
    }]
});

export default model('Topics',topicSchema);
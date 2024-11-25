import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name : { type:String,require:true },
    description : { type:String, require:true },
    price : { type:Number,require:true },
    image : { type:String , require : true },
    categorry : { type:String , require: true }
})
//mongoose.models.food ||
const foodModel =  mongoose.model('food',foodSchema) ;

export default foodModel;











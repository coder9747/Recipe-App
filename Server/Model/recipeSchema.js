import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    name:{type:String,require:true},
    imageUrl:{type:String,require:true},
    instructions:{type:String,require:true},
    ingredients:[{type:String,requie:true}],
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    username:{type:String,require:true,ref:"user"},
})



export default mongoose.model("recipe",recipeSchema);
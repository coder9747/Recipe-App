import recipeSchema from "../Model/recipeSchema.js";
import saveRecipeModel from "../Model/saveRecipeModel.js";


export const createRecipe = async(req,res)=>
{
    const {name,ingredients,instructions,imageUrl} = req.body;
    if(name && ingredients && instructions && imageUrl)
    {
        try {
            const recipe = recipeSchema({...req.body,userId:req.user._id,username:req.user.username});
            await recipe.save();
            res.send({
                status:"succes",
                message:"Recipe Created Succes",
            })
        } catch (error) {
            res.send({
                status:"error",
                message:"Server Issue"
            })   
        }
    }
    else
    {
        res.send({
            status:"error",
            message:"All Fields Required"
        })
    }
    
    


}
export const getAllRecipe = async(req,res)=>
{
    try {
        const recipes =await recipeSchema.find({});
        res.send({
            status:"succes",
            message:"all Recipe fetched",
            data:recipes,
        })
        
    } catch (error) {
        res.send({
            status:"error",
            message:"Something Went Wrong",
        })
        
    }
}

export const saveRecipe = async(req,res)=>
{
    try {
        const {id} = req.body;
        const userId = req.user._id;
        const r = await recipeSchema.findById(id).select("-_id");
        const recipeToSave = {name:r.name,imageUrl:r.imageUrl,instructions:r.instructions, ingredients:r. ingredients,userId:userId,username:r.username};
        const recipe = new saveRecipeModel(recipeToSave);
        await recipe.save();
        res.send({
            status:"succes",
            message:"Recipe Saved Succes",
        })
        
    } catch (error) {
        res.send({
            status:"succes",
            message:"Something Went Wrong",
        })
        
    }
   


    
    
}
export const getAllSavedRecipe = async(req,res)=>
{
    
    try {
        const id = req.user._id;
        const result = await saveRecipeModel.find({userId:id}).select("-userId");
        res.send({
            status:"succes",
            message:"all Recipe Fetched",
            data:result,
        })

    
        
    } catch (error) {
        res.send({
            status:"error",
            message:"Something Went Wrong",
            data:result,
        })
    }
}

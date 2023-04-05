import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context'

const CreateRecipe = () => {
    const {createRecipe,showAlert,isLogin} = useContext(Context);
    
    const [recipe, setrecipe] = useState({
        name: "",
        imageUrl: "",
        instructions: "",
        ingredients: [""],
    })
    const handleRecipeSubmit = async()=>
    {
        const result = await createRecipe(recipe);
        console.log(result);
        showAlert(result.message);
        setrecipe({
            name: "",
            imageUrl: "",
            instructions: "",
            ingredients: [""],
        })
    }
    const add = () => {
        setrecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] })

    }
    const handleAddIngredient = (e)=>
    {
        const {id,value} = e.target;
        const newArr = recipe.ingredients;
        newArr[id] = value;
        setrecipe({...recipe,ingredients:newArr})
    }
    const handleIngredientsDelete = (e)=>
    {
        const {id} = e.target;
        const newArr = recipe.ingredients.filter((item,idx)=> idx!=id);
        setrecipe({...recipe,ingredients:newArr})
    }
    const handleRecipeChange = (e)=>
    {
        const {name,value} = e.target;
        setrecipe({...recipe,[name]:value})
    }
    return (
        <div className='box'>
            <div className="recipe-box">
                <h2 className='title'>Create Recipe</h2>
                <input type="text" onChange={handleRecipeChange} value={recipe.name} name='name' placeholder='name' />
                <input type="text" onChange={handleRecipeChange} value={recipe.imageUrl} name='imageUrl' placeholder='Image URL' />
                {
                    recipe.ingredients.map((item,idx,arr) => {
                        return (
                            <div className="ingredients-div" key={idx} >
                                <input value={item} placeholder='ingredient'  id={idx} onChange={handleAddIngredient}   />
                                <i className="fa-solid fa-trash" id={idx} onClick={handleIngredientsDelete}></i>
                            </div>
                        )

                    })
                }
                <button className='add-ingredients' onClick={add}>Add Ingredient</button>
                <textarea rows={10} cols={20} c type="text" value={recipe.instructions} onChange={handleRecipeChange} name='instructions' placeholder='instructions' />
                <button onClick={()=>isLogin?handleRecipeSubmit():showAlert("Please Login First")} className='btn' style={{ margin: "0px auto" }}>Submit</button>
            </div>

        </div>
    )
}

export default CreateRecipe

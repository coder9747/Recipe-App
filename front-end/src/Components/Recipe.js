import React, { useContext } from 'react'
import { Context } from '../Context/Context'

const Recipe = (props) => {
    const {saveRecipe,showAlert,isLogin} = useContext(Context);
    const handleSave = async()=>
    {
       const result = await saveRecipe(props._id);
       showAlert(result.message);
       
    }
    return (
        <div className='recipe'>
            <div className="recipe-box-div">
                <h5>{props.name}</h5>
                <img src={props.imageUrl ? props.imageUrl : ""} alt="" />
                <p>Ingredients: {props.ingredients ?
                    props.ingredients.join(" ")
                    : null}</p>
                <p>Instruction: {props.instructions.substring(0,50)}...</p>
                <p>username : {props.username}</p>
                <button onClick={()=>isLogin?handleSave:showAlert("Please Login First")} className='btn'>Save</button>
            </div>
        </div>
    )
}

export default Recipe

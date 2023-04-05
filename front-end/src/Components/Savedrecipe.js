import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Context'

const Savedrecipe = () => {
    const { getSaveRecipe, showAlert } = useContext(Context);
    const [savedRecipes, setSaved] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await getSaveRecipe();
            if (result.status == "succes") {
                setSaved(result.data);
            }
            showAlert(result.message)
        }
        fetchData();
    }, [])
    return (
        <div className='recipe'>
            {savedRecipes.map((item, idx) => {
                return (
                    <div className="recipe-box-div" key={idx}>
                        <h5>{item.name}</h5>
                        <img src={item.imageUrl ? item.imageUrl : ""} alt="" />
                        <p>Ingredients: {item.ingredients ?
                            item.ingredients.join(" ")
                            : null}</p>
                        <p>Instruction: {item.instructions}</p>
                        <p>username : {item.username}</p>
                    </div>
                )
            })
            }

        </div>
    )
}

export default Savedrecipe

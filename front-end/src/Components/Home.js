import React, { useContext, useEffect } from 'react'
import Recipe from './Recipe'
import { Context } from '../Context/Context'

const Home = () => {
  const {recipes,getAllRecipe} = useContext(Context);
  useEffect(()=>{
    getAllRecipe()
  },[])
  return (
    <div className='recipe-menu'>
      {
        recipes?
        recipes.map((item)=>
        {
          return <Recipe {...item}/>
        }):null
      }
      
    </div>
  )
}

export default Home

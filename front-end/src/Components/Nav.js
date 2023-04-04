import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div className='nav'>
      <div className="left">
        <Link to={'/'}>Home</Link>
        <Link to={'/createrecipe'}>Create Recipe</Link>
        <Link to={'savedrecipe'}>Saved Recipe</Link>
      </div>
      <div className="right">
        {
          localStorage.getItem("token")?
           <button>Logout</button> :
           <div>
            <button className='btn'>Login</button>
            <button className='btn'>Sign In</button>
          </div>
        }
      </div>
      
    </div>
  )
}

export default Nav

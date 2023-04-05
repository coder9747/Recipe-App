import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context } from '../Context/Context'

const Nav = () => {
  const {isLogin,setIsLogin} = useContext(Context);
  return (
    <div className='nav'>
      <div className="left">
        <Link to={'/'}>Home</Link>
        <Link to={'/createrecipe'}>Create Recipe</Link>
        <Link to={'savedrecipe'}>Saved Recipe</Link>
      </div>
      <div className="right">
        {
          isLogin?
          <Link to={"/login"}>
           <button onClick={(e)=> setIsLogin(pre=>!pre)} className='btn'>Logout</button>
          </Link>
            :
            <div>
              <Link to={'/login'}>
                <button className='btn'>Login</button>
              </Link>
              <Link to={'/register'}>
                <button className='btn'>Sign In</button>
              </Link>
            </div>
        }
      </div>

    </div>
  )
}

export default Nav

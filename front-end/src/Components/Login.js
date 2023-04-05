import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {handleLogin,showAlert,setIsLogin} = useContext(Context);
  const [info,setInfo ] = useState({
    userinfo:"",
    password:""
  })
  const navigate = useNavigate();
  const login = async()=>
  {
    console.log('hey')
    const result = await handleLogin(info);
    if(result.status == "succes")
    {
      console.log(result)
        localStorage.setItem("token",result.token);
        navigate("/");
        setIsLogin(pre=>!pre)
    }
    showAlert(result.message);
  }
  return (
    <div className='box'>
        <div className="main">
            <h1 className="title">Login</h1>
            <input name='userinfo' onChange={(e)=> setInfo({...info,[e.target.name]:e.target.value})} value={info.email} type="text" placeholder='username/email' />
            <input name='password' onChange={(e)=> setInfo({...info,[e.target.name]:e.target.value})} value={info.password} type="password" placeholder='password'  />
            <button onClick={login} className="btn">Login</button>
        </div>
      
    </div>
  )
}

export default Login

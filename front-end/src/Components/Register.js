import React,{useContext, useState} from 'react'
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {handleSubmit,showAlert} = useContext(Context);
    const navigate = useNavigate();
    const [info, setinfo] = useState({
        name:"",
        email:"",
        password:"",
        passwordConfirm:"",
        username:"",
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setinfo({...info,[name]:value})
    }
    const handlesubmit = async()=>
    {
        const result = await handleSubmit(info);
        if(result.status === "succes")
        {
            navigate("/login");
        }
        showAlert(result.message);
    }
  return (
    <div className='box'>
        <div className="main">
            <h1 className='title'>Register</h1>
            <input type="text" onChange={handleChange}  name='name' value={info.name} placeholder='Enter Name' />
            <input type="text" onChange={handleChange}  name='username' value={info.username} placeholder='Enter username' />
            <input type="email" onChange={handleChange}  name='email' value={info.email} placeholder='Enter Email' />
            <input type="password" onChange={handleChange}  name='password' value={info.password} placeholder='Enter password' />
            <input type="password" onChange={handleChange}  name='passwordConfirm' value={info.passwordConfirm} placeholder='Enter password' />
            <button onClick={handlesubmit} className='btn'>Submit</button>
        </div>
      
    </div>
  )
}

export default Register

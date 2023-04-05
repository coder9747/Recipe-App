import { useRef, useState } from "react";
import { Context } from "./Context";

const Contextstate = (props)=>
{
    const [recipes,setRecipe] = useState([]);
    const [alert, setalert] = useState("");
    const [isLogin,setIsLogin] = useState(false);
    const ref = useRef();
    const showAlert = (message)=>
    {
        setalert(message);
        setTimeout(() => {
            if(ref.current)ref.current.click();
        },0);
    }
    const handleSubmit = async(info)=>
    {
        const response = await fetch("http://localhost:4500/auth/register",{
            method:"POST",
            headers:
            {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(info)
        })
        const result = response.json();
        return result;
    }
    const handleLogin = async(info)=>
    {
        const respone = await fetch("http://localhost:4500/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(info),
        })
        const result = respone.json();
        return result;
    }
    const createRecipe = async(recipe)=>
    {
        const response = await fetch("http://localhost:4500/recipe/createrecipe",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${localStorage.getItem("token")}`,
            },
            body:JSON.stringify(recipe)
        })
        const result = await response.json();
        return result;
    }
    const getAllRecipe = async()=>
    {
        const respone = await fetch("http://localhost:4500/recipe/",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            },
        })
        const result = await respone.json();
        setRecipe(result.data);
    }
    const saveRecipe = async(id)=>
    {
        const response = await fetch("http://localhost:4500/recipe/save",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({id:id}),
        })
        const result = await response.json();
        return result;
    }
    const getSaveRecipe = async()=>
    {
        const response = await fetch("http://localhost:4500/recipe/getrecipes",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
        const result = await response.json();
        return result;

    }
    return(
        <Context.Provider  value={{setIsLogin,isLogin,ref,alert,showAlert,handleSubmit,handleLogin,createRecipe,recipes,getAllRecipe,saveRecipe,getSaveRecipe}}>
            {props.children}
        </Context.Provider>
    )
}

export default Contextstate;
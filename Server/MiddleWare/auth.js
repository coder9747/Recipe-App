import { userModel } from "../Model/userModel.js";
import jwt from "jsonwebtoken"

const key = "skldfjlksdlkflksdklflklk";

export const auth = async(req,res,next)=>
{
    const {authorization} = req.headers;
    if(authorization && authorization.startsWith("Bearer"))
    {
        const token = authorization.split(" ").at(1);
        const payload = jwt.verify(token,key);
        const id = payload.userId;
        const user = await userModel.findById(id).select("-password");
        req.user = user;
        next();
    }
    else
    {
        res.send({
            status:"error",
            message:"Unauthorized User"
        })
        
        
    }
}
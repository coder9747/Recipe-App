import { userModel } from "../Model/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";

const key = "skldfjlksdlkflksdklflklk";


export const registerUser = async (req, res) => {
    const { name, username, email, password, passwordConfirm } = req.body;
    if (name && username && email && password && passwordConfirm) {
        try {
            const user = await userModel.findOne({ email: email, });
            if (!user) {
                const isUniqueUser = await userModel.findOne({ username: username });
                if (!isUniqueUser) {
                    if (password === passwordConfirm) {
                        if (password.length > 5) {
                            const hash = await bcrypt.hash(password, 10)
                            const newUser = new userModel({
                                name: name,
                                username: username,
                                email: email,
                                password: hash,
                            })
                            await newUser.save();
                            res.send({
                                status: "succes",
                                message: "user registered Succes",
                            })
                        }
                        else {
                            res.send({
                                status: "error",
                                message: "password to short"
                            })
                        }

                    }
                    else {
                        res.send({
                            status: "error",
                            message: "Both password Should Same"
                        })
                    }

                }
                else {
                    res.send({
                        status: "error",
                        message: "username Already Taken"
                    })
                }


            }
            else {
                res.send({
                    status: "error",
                    message: "Email Already Registered"
                })
            }


        } catch (error) {
            res.send({
                status: "error",
                message: "uncaught Error"
            })

        }

    }
    else {
        res.send({
            status: "error",
            message: "All Fileds Required"
        })
    }

}

export const login = async (req, res) => {
    const { userinfo, password } = req.body;
   
    try {
        if (userinfo && password) 
        {
            const user = await userModel.findOne({ email: userinfo }) || await userModel.findOne({ username: userinfo });
            if (user) 
            {
               const isTruePassword = await bcrypt.compare(password,user.password);
               if(isTruePassword)
               {
                 const token =  jwt.sign({userId:user._id},key,{expiresIn:"1d"});
                //  console.log(token)
                 res.send({
                    status:"succes",
                    message:"Succes",
                    token:token,
                 })
               }
               else
               {
                res.send({
                    status:"error",
                    message:"Password Not Match",
                })
               }
            }
            else {
                res.send({
                    status: "error",
                    message: "user Not registered",
                })
            }
        }
        else 
        {
            res.send({
                status: 'error',
                message: "All Fields required",
            })
        }



    } catch (error) {
        res.send({
            status: "error",
            message: "uncaught error"
        })

    }
}
import express from "express";
import cors from "cors"
import dbConnect from "./Database/Db.js";
import router from "./Router/userRouter.js";





const app = express();


//DatabaseConnect;
dbConnect();



app.use(express.json());
app.use(cors());


app.use("/auth",router);











app.listen(4500,()=>{
    console.log("Server Running At Port 4500");
})












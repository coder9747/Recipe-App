import express from "express";
import cors from "cors"
import dbConnect from "./Database/Db.js";
import router from "./Router/userRouter.js";
import recipeRouter from "./Router/recipeRouter.js";




const app = express();

app.use(express.json());

//DatabaseConnect;
dbConnect();



app.use(express.json());
app.use(cors());


app.use("/auth",router);
app.use("/recipe",recipeRouter);










app.listen(4500,()=>{
    console.log("Server Running At Port 4500");
})












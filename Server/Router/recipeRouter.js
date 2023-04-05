import express from "express";
import { auth } from "../MiddleWare/auth.js";
import { createRecipe,getAllRecipe,saveRecipe,getAllSavedRecipe } from "../Controller/recipeController.js";

const recipeRouter = express.Router();



recipeRouter.get("/",[getAllRecipe]);
recipeRouter.post("/createrecipe",[auth,createRecipe]);
recipeRouter.post("/save",[auth,saveRecipe]);
recipeRouter.get("/getrecipes",[auth,getAllSavedRecipe]);





export default recipeRouter;
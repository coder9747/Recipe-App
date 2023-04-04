import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017", {
            dbName: "RecipeDataBase",
        })
        console.log("Connected Succes");
    } catch (error) {
        console.log("Server Error");
    }

}

export default dbConnect;
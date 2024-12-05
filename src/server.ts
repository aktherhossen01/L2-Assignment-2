import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function server(){


    try{
        await mongoose.connect(process.env.DATABASE_URL as string)


        app.listen(config.port,()=>{
            console.log(`port is running ${config.port}`);
            
        })
    }catch(err){
console.log(err);

    }
   
}



server()
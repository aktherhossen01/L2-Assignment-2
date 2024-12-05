import { model, Schema } from "mongoose";
import { ICar } from "./car.interface";


const carSchema = new Schema<ICar>({
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        default: 'Sedan',
        enum: {
            values: ["Sedan", "SUV", "Truck","Coupe","Convertible"],
            message: '{VALUE} is not a valid car.'
        },// Enum validation
      },
    description :{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    inStock: {
        type :Boolean
    }
},{ timestamps: true })

 const Car = model<ICar>('Car', carSchema)
 export default Car
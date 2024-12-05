import mongoose, { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required.'],
        validate: {
            validator: function (v: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Basic email regex
            },
            message: (props: { value: string }) => 
                `${props.value} is not a valid email address.`
        }
    },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    quantity :{
        type:Number,
        required: true
    },
    totalPrice :{
        type:Number,
        required: true
    }
},{ timestamps: true })

const Order = model<IOrder>('Order', orderSchema)
 export default Order
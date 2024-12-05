import mongoose from "mongoose"

export interface IOrder{
    email:string,
    car: mongoose.Types.ObjectId| string
    quantity :number
    totalPrice :number
}
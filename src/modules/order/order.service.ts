import mongoose from "mongoose";
import Car from "../car/car.model";
import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async(payload: IOrder)=>{
    // Fetch the car from the inventory


   

    const car = await Car.findById(new mongoose.Types.ObjectId(payload.car));
   

  if (!car) {
    throw new Error("Car not found");
  }

     // Check stock availability
  if (car.quantity < payload.quantity) {
    throw new Error("Insufficient stock");
  }

  // Reduce car inventory
  car.quantity -= payload.quantity;
  car.inStock = car.quantity > 0; // Update inStock flag
  await car.save();


    // Create the order
    const order = new Order(payload);
    const result = await order.save();
  
    return result;
}

const getOrder = async()=>{
    const result =await Order.find()
    return result
}


const calculateRevenue = async () => {
    const result = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" }, // Calculate total revenue
        },
      },
    ]);
  
    return result[0]?.totalRevenue || 0; // Return 0 if no orders exist
  };

export const orderServices ={
    createOrder,
    getOrder,
    calculateRevenue
}
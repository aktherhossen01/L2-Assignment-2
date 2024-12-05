import express, { Request, Response } from "express";
import carRouter from "./modules/car/car.router";
import orderRouter from "./modules/order/order.route";

const app = express();

app.use(express.json())

app.use('/api/cars',carRouter)
app.use('/api/orders',orderRouter)

app.get('/',(req:Request, res:Response)=>{
    res.send({
        status:true,
        message:'server live'
    })
})
export default app;
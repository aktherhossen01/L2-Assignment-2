import { Router } from "express";
import { orderController } from "./order.controller";

const orderRouter = Router()

orderRouter.post('/create-order',orderController.createOrder)
orderRouter.get('/',orderController.getOrder)
orderRouter.get('/revenue', orderController.calculateRevenue);

export default orderRouter
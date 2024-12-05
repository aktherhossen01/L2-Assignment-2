import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createOrder = async(req:Request,res:Response)=>{
   
    
    try{
        const body = req.body 
        
        
        const result = await orderServices.createOrder(body)
      // check the car 674f62bb4d2ab3e9312d6ba1
      
        res.send({
          message: 'order created successfully',
            success: true,
            data:result,
        })}catch(err){
            res.send({
                success: false,
                message:'something went wrong',
                err
            })
        }
    
}

const getOrder = async(req:Request,res:Response)=>{
    try{
        
        const result = await orderServices.getOrder()

        res.send({
            success: true,
            message: 'order get successfully',
            result,
        })}catch(err){
            res.send({
                success: false,
                message:'something went wrong',
                err
            })
        }
    

}




const calculateRevenue = async (req: Request, res: Response) => {
    try {
      const totalRevenue = await orderServices.calculateRevenue();
  
      res.status(200).send({
        message: "Revenue calculated successfully",
        "status": true,
        data: { totalRevenue },
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        err
      });
    }
  };
  

export const orderController ={
    createOrder,
    getOrder,
    calculateRevenue
}
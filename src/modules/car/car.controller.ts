import { Request, Response } from "express";

import { carServices } from "./car.service";



const createCar = async(req:Request, res:Response)=>{
  try{
    const payload = req.body
    const result = await carServices.createCar(payload)

    res.json({
        message: 'Car created successfully',
        "success": true,
        data: result
    })
  }catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const errorStack = error instanceof Error ? error.stack : undefined;

    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: errorMessage, // Error description
      stack:  errorStack  // Full stack trace 
    });
  }
    
  
}






const getCar = async(req:Request, res:Response)=>{
 try{

    const result = await carServices.getCar()

    res.send({
      message: 'Car getting successfully',
        status:true,
        data: result
    })
}catch(err){


    console.log(err);
}
}



const getSingleCar = async (req: Request, res: Response) => {
    try {
    //   console.log(req.params)
      const userId = req.params.userId
  
      const result = await carServices.getSingleCar(userId)
  console.log(result);
  
      res.status(200).json({
        message:"Car retrieved successfully",
        success: true,
        data: result
    })
    } catch (error) {
      res.json({
        status: false,
        message: 'Something went wrong',
        error,
      })
    }
  }
const updateCar = async (req: Request, res: Response) => {
    try {
        // console.log(req.body)
        const body = req.body
      const userId = req.params.userId
  
      const result = await carServices.updateCar(userId,body)
  
      res.send({
        message: 'Car updated successfully',
        status: true,
        data: result
      })
    } catch (error) {
      res.json({
        status: false,
        message: 'Something went wrong',
        error,
      })
    }
  }
const deleteCar = async (req: Request, res: Response) => {
    try {
     
      const userId = req.params.userId
  
       await carServices.deleteCar(userId)
  
      res.send({
        status: true,
        message: 'car delete successfully',
       data:{}
      })
    } catch (error) {
      res.json({
        status: false,
        message: 'Something went wrong',
        error,
      })
    }
  }



export const CarController = {
    createCar,
    getCar,
    getSingleCar,
    updateCar,
    deleteCar
}
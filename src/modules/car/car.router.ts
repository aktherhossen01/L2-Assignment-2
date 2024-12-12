import { Router } from "express";
import { CarController } from "./car.controller";

const carRouter = Router()

carRouter.post('/',CarController.createCar)
carRouter.get('/',CarController.getCar)
carRouter.get('/:userId',CarController.getSingleCar)
carRouter.put('/:userId',CarController.updateCar)
carRouter.delete('/:userId',CarController.deleteCar)

export default carRouter
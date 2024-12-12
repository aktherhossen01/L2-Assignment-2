"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const car_service_1 = require("./car.service");
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield car_service_1.carServices.createCar(payload);
        res.json({
            message: 'Car created successfully',
            "success": true,
            data: result
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        const errorStack = error instanceof Error ? error.stack : undefined;
        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: errorMessage, // Error description
            stack: errorStack // Full stack trace 
        });
    }
});
const getCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_service_1.carServices.getCar();
        res.send({
            message: 'Car getting successfully',
            status: true,
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //   console.log(req.params)
        const userId = req.params.userId;
        const result = yield car_service_1.carServices.getSingleCar(userId);
        console.log(result);
        res.status(200).json({
            message: "Car retrieved successfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(req.body)
        const body = req.body;
        const userId = req.params.userId;
        const result = yield car_service_1.carServices.updateCar(userId, body);
        res.send({
            message: 'Car updated successfully',
            status: true,
            data: result
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        yield car_service_1.carServices.deleteCar(userId);
        res.send({
            status: true,
            message: 'car delete successfully',
            data: {}
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
exports.CarController = {
    createCar,
    getCar,
    getSingleCar,
    updateCar,
    deleteCar
};

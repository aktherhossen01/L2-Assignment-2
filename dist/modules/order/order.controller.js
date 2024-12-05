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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = yield order_service_1.orderServices.createOrder(body);
        // check the car 674f62bb4d2ab3e9312d6ba1
        res.send({
            message: 'order created successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.send({
            success: false,
            message: 'something went wrong',
            err
        });
    }
});
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderServices.getOrder();
        res.send({
            success: true,
            message: 'order get successfully',
            result,
        });
    }
    catch (err) {
        res.send({
            success: false,
            message: 'something went wrong',
            err
        });
    }
});
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.orderServices.calculateRevenue();
        res.status(200).send({
            message: "Revenue calculated successfully",
            "status": true,
            data: { totalRevenue },
        });
    }
    catch (err) {
        res.status(500).send({
            success: false,
            err
        });
    }
});
exports.orderController = {
    createOrder,
    getOrder,
    calculateRevenue
};

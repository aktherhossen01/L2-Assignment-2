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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const car_model_1 = __importDefault(require("../car/car.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetch the car from the inventory
    const car = yield car_model_1.default.findById(new mongoose_1.default.Types.ObjectId(payload.car));
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
    yield car.save();
    // Create the order
    const order = new order_model_1.default(payload);
    const result = yield order.save();
    return result;
});
const getOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.find();
    return result;
});
const calculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield order_model_1.default.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" }, // Calculate total revenue
            },
        },
    ]);
    return ((_a = result[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0; // Return 0 if no orders exist
});
exports.orderServices = {
    createOrder,
    getOrder,
    calculateRevenue
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_router_1 = __importDefault(require("./modules/car/car.router"));
const order_route_1 = __importDefault(require("./modules/order/order.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/cars', car_router_1.default);
app.use('/api/orders', order_route_1.default);
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'server live'
    });
});
exports.default = app;

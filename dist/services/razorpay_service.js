"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.razorPayInstance = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const razorpay_1 = __importDefault(require("razorpay"));
exports.razorPayInstance = new razorpay_1.default({
    key_id: process.env.key_id,
    key_secret: process.env.key_secret
});
//# sourceMappingURL=razorpay_service.js.map
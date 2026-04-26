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
exports.createPaymentLink = void 0;
const razorpay_service_1 = require("../services/razorpay_service");
const createPaymentLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, name, email } = req.body;
        const paymentLink = yield razorpay_service_1.razorPayInstance.paymentLink.create({
            amount: amount * 100,
            currency: "INR",
            description: "TestPayment",
            customer: {
                name,
                email,
            }
        });
        return res.json({
            success: true,
            url: paymentLink.short_url,
            id: paymentLink.id,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
exports.createPaymentLink = createPaymentLink;
//# sourceMappingURL=payment.controller.js.map
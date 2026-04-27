import dotenv from "dotenv";
dotenv.config();
import RazorPay from "razorpay";

export const razorPayInstance=new RazorPay({
   key_id:process.env.key_id,
   key_secret:process.env.key_secret
})
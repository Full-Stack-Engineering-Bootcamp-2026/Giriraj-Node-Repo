import {Request,Response} from 'express';
import {razorPayInstance} from "../services/razorpay_service";

export const createPaymentLink=async(req:Request,res:Response)=>{
   try{
    const{amount,name,email}=req.body;
    const paymentLink=await razorPayInstance.paymentLink.create({
        amount:amount*100,
        currency:"INR",
        description:"TestPayment",
        customer:{
            name,
            email,
        }
   });
   return res.json({
    success:true,
    url:paymentLink.short_url,
    id:paymentLink.id,
   });
   } catch(error:any){
    return res.status(500).json({
        success:false,
        message:error.message
    });
   }
}
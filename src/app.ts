import express,{Request,Response} from "express";
// import multer from "multer";
// import path from "path";
import prductRouter from "./routes/payment.route"; 
// import { User } from "./modules/user.js";
// import { Order } from "./modules/order.js";
// import { Product } from "./modules/product.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const MONGODB_URI =
  'mongodb+srv://giriraj1:janki@cluster0.hg0dbh5.mongodb.net/test';


const app = express();
const port = 3000;



// app.get("/", (req:Request, res:Response) => {
//   const name = req.query;
//   res.json({
//     message: "Indra the great",
//   });
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static("images"));

app.use('/',prductRouter)




// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });



const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    app.listen(3000);
    console.log("MongoDB connected successfully!!!");
    console.log("server started at 3000");
    
  } catch (err) {
    console.log(err);
  }
};

startServer()


// mongoose
//   .connect(MONGODB_URI)
//   .then(result => {
//     app.listen(3001);
//   })
//   .catch(err => {
//     console.log(err);
//   });

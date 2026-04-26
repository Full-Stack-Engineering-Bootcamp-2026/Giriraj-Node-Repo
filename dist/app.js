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
const express_1 = __importDefault(require("express"));
// import multer from "multer";
// import path from "path";
const payment_route_1 = __importDefault(require("./routes/payment.route"));
// import { User } from "./modules/user.js";
// import { Order } from "./modules/order.js";
// import { Product } from "./modules/product.js";
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = 'mongodb+srv://giriraj1:janki@cluster0.hg0dbh5.mongodb.net/test';
const app = (0, express_1.default)();
const port = 3000;
// app.get("/", (req:Request, res:Response) => {
//   const name = req.query;
//   res.json({
//     message: "Indra the great",
//   });
// });
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/images", express_1.default.static("images"));
app.use('/', payment_route_1.default);
// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(MONGODB_URI);
        app.listen(3000);
        console.log("MongoDB connected successfully!!!");
        console.log("server started at 3000");
    }
    catch (err) {
        console.log(err);
    }
});
startServer();
mongoose_1.default
    .connect(MONGODB_URI)
    .then(result => {
    app.listen(3001);
})
    .catch(err => {
    console.log(err);
});
//# sourceMappingURL=app.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const express_1 = require("express");
const typedi_1 = require("typedi");
const express_validator_1 = require("express-validator");
const post_controller_1 = require("../controller/post.controller");
// 2. Configure storage (this saves files to an 'images' folder)
// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'images'); 
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
//   }
// });
// const upload = multer({ storage: fileStorage }); 
let PostRoutes = class PostRoutes {
    constructor(controller) {
        this.controller = controller;
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.get('/posts', this.controller.getAll);
        this.router.get('/post/:postId', this.controller.getById);
        this.router.post('/post', 
        //upload.single('imageUrl'),
        [
            (0, express_validator_1.body)('title').isLength({ min: 7 }),
            (0, express_validator_1.body)('content').isLength({ min: 5 }),
        ], this.controller.create);
        this.router.put('/post/:postId', [
            (0, express_validator_1.body)('title').isLength({ min: 7 }),
            (0, express_validator_1.body)('content').isLength({ min: 5 }),
        ], this.controller.update);
        this.router.delete('/post/:postId', this.controller.delete);
    }
    getRoutes() {
        return this.router;
    }
};
exports.PostRoutes = PostRoutes;
exports.PostRoutes = PostRoutes = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [post_controller_1.PostController])
], PostRoutes);
//# sourceMappingURL=post.routes.js.map
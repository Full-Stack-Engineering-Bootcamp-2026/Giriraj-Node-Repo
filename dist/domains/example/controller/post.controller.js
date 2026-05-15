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
exports.PostController = void 0;
const typedi_1 = require("typedi");
const express_validator_1 = require("express-validator");
const post_service_1 = require("../service/post.service");
let PostController = class PostController {
    constructor(service) {
        this.service = service;
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const page = parseInt(req.query.page) || 1;
                const limit = Math.min(parseInt(req.query.limit) || 2);
                const posts = yield this.service.getAll(page, limit);
                res.status(200).json({ posts });
            }
            catch (err) {
                next(err);
            }
        });
        this.getById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const postId = req.params.postId;
                const post = yield this.service.getById(postId);
                res.status(200).json({ post });
            }
            catch (err) {
                next(err);
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            console.log(req, res);
            if (!errors.isEmpty()) {
                return res.status(422).json({ message: 'Validation failed' });
            }
            if (!req.file) {
                const error = new Error('No image provided .');
                // error.statusCode=422;
                return res.status(422).json({ message: 'No image provided' });
            }
            try {
                const post = yield this.service.create(req.body, req.file);
                res.status(201).json({ post });
            }
            catch (err) {
                next(err);
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            console.log(req, res);
            if (!errors.isEmpty()) {
                return res.status(422).json({ message: 'Validation failed' });
            }
            if (!req.file) {
                const error = new Error('No image provided .');
                // error.statusCode=422;
                return res.status(422).json({ message: 'No image provided' });
            }
            try {
                const postId = req.params.postId;
                const post = yield this.service.update(postId, req.body, req.file);
                res.status(200).json({ post });
            }
            catch (err) {
                next(err);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const postId = req.params.postId;
                yield this.service.delete(postId);
                res.status(200).json({ message: 'Deleted' });
            }
            catch (err) {
                next(err);
            }
        });
    }
};
exports.PostController = PostController;
exports.PostController = PostController = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
//# sourceMappingURL=post.controller.js.map
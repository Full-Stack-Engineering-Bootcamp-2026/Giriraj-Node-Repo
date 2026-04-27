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
exports.getPost = exports.createPost = exports.getPosts = void 0;
const express_validator_1 = require("express-validator");
const post_1 = __importDefault(require("../models/post"));
// GET /posts
const getPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_1.default.find();
        res.status(200).json({
            message: 'Fetched posts successfully.',
            posts: posts,
        });
    }
    catch (err) {
        const error = err;
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
});
exports.getPosts = getPosts;
// POST /post
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    const { title, content } = req.body;
    const post = new post_1.default({
        title,
        content,
        imageUrl: 'images/duck.jpg',
        creator: { name: 'Maximilian' },
    });
    try {
        const result = yield post.save();
        res.status(201).json({
            message: 'Post created successfully!',
            post: result,
        });
    }
    catch (err) {
        const error = err;
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
});
exports.createPost = createPost;
// GET /post/:postId
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.postId;
    try {
        const post = yield post_1.default.findById(postId);
        if (!post) {
            const error = new Error('Could not find post.');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            message: 'Post fetched.',
            post: post,
        });
    }
    catch (err) {
        const error = err;
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
});
exports.getPost = getPost;
//# sourceMappingURL=feed.js.map
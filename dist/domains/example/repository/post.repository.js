"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.PostRepository = void 0;
const typedi_1 = require("typedi");
const post_entity_1 = require("../entities/post.entity");
let PostRepository = class PostRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return post_entity_1.PostModel.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return post_entity_1.PostModel.findById(id);
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = new post_entity_1.PostModel(Object.assign(Object.assign({}, data), { imageUrl: 'images/duck.jpg', creator: { name: 'Maximilian' } }));
            return post.save();
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return post_entity_1.PostModel.findByIdAndUpdate(id, data, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield post_entity_1.PostModel.findByIdAndDelete(id);
            return !!result;
        });
    }
};
exports.PostRepository = PostRepository;
exports.PostRepository = PostRepository = __decorate([
    (0, typedi_1.Service)()
], PostRepository);
//# sourceMappingURL=post.repository.js.map
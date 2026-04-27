"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
require("reflect-metadata");
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const typedi_1 = require("typedi");
const logger_1 = require("./common/utils/logger");
const error_handler_middleware_1 = require("./common/middleware/error-handler.middleware");
const post_routes_1 = require("./domains/example/routes/post.routes");
dotenv_1.default.config();
class Application {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT || '8080', 10);
        this.initializeDatabase();
        this.initializeMiddleware();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }
    initializeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(process.env.MONGO_URI);
                logger_1.logger.info('MongoDB connected');
            }
            catch (err) {
                logger_1.logger.error('DB connection failed');
                process.exit(1);
            }
        });
    }
    initializeMiddleware() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use('/images', express_1.default.static(path_1.default.join(__dirname, 'images')));
    }
    initializeRoutes() {
        const v1Router = (0, express_1.Router)();
        const postRoutes = typedi_1.Container.get(post_routes_1.PostRoutes);
        v1Router.use('/feed', postRoutes.getRoutes());
        this.app.use('/api/v1', v1Router);
        this.app.get('/health', (_, res) => {
            res.json({ status: 'OK' });
        });
    }
    initializeErrorHandling() {
        this.app.use(error_handler_middleware_1.notFoundHandler);
        this.app.use(error_handler_middleware_1.errorHandler);
    }
    start() {
        this.app.listen(this.port, () => {
            logger_1.logger.info(`Server running on port ${this.port}`);
        });
    }
}
const app = new Application();
app.start();
//# sourceMappingURL=app.js.map
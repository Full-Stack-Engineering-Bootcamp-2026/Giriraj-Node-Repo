"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundHandler = void 0;
const notFoundHandler = (req, res) => {
    res.status(404).json({ message: 'Route not found' });
};
exports.notFoundHandler = notFoundHandler;
const errorHandler = (err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(status).json({ message });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.middleware.js.map
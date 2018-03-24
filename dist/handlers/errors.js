"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = (err, req, res, next) => {
    const code = err.status || 500;
    const message = err.code === 'LIMIT_FILE_SIZE' ? 'File size is too large.' : 'Unknown error.';
    res.status(code);
    res.render('error', {
        message,
        title: `${code} | File Metadata Microservice`,
    });
    next();
};
//# sourceMappingURL=errors.js.map
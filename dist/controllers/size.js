"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const filesize_1 = __importDefault(require("filesize"));
function normalizeStats(req) {
    const file = Object.assign({}, req.file, { size: filesize_1.default(req.file.size) });
    delete file.buffer;
    delete file.fieldname;
    delete file.encoding;
    return file;
}
/**
 * GET /size
 * Size index page
 */
exports.index = (req, res) => {
    res.redirect('/');
};
/**
 * POST /size
 * Determine file metadata.
 */
exports.size = (req, res) => {
    const file = normalizeStats(req);
    res.render('size', { title: 'Size | File Metadata Microservice', stats: file });
};
//# sourceMappingURL=size.js.map
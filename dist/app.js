"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const csurf_1 = __importDefault(require("csurf"));
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const homeController = __importStar(require("./controllers/home"));
const sizeController = __importStar(require("./controllers/size"));
const errors_1 = require("./handlers/errors");
const app = express_1.default();
const upload = multer_1.default({
    storage: multer_1.default.memoryStorage(),
    limits: { fileSize: 5000000 },
}).single('file');
const csrfProtection = csurf_1.default({ cookie: true });
const parseForm = body_parser_1.default.urlencoded({ extended: false });
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(cookie_parser_1.default());
app.get('/', csrfProtection, homeController.index);
app.get('/size', sizeController.index);
app.post('/size', upload, parseForm, csrfProtection, sizeController.size);
app.use(errors_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map
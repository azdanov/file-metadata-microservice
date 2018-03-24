"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.get('/', (request, response) => {
    response.send('Hello World');
});
const listener = app.listen(port, () => {
    console.log(`Listening on port ${listener.address().port}`);
});
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 3000;
// create an express server
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use(index_1.default);
app.listen(port, function () {
    console.log("App listening at http://localhost:".concat(port));
});
exports.default = app;
// ./node_modules/.bin/eslint yourfile.js

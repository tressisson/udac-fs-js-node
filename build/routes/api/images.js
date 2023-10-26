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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var resize_1 = require("../../utilities/resize");
var fs_1 = require("fs");
var fs_2 = __importDefault(require("fs"));
var validation_1 = require("../../middle/validation");
var route = (0, express_1.Router)();
route.get("/", validation_1.validate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var file_name, width, height, thumbdir, filepath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                file_name = req.query.file_name;
                width = parseInt(req.query.width);
                height = parseInt(req.query.height);
                thumbdir = (0, path_1.join)(__dirname, "../../../thumb");
                filepath = (0, path_1.join)(__dirname, "../../../thumb/".concat(file_name, "_").concat(width, "_").concat(height, ".jpg"));
                if (!fs_2.default.existsSync(thumbdir)) {
                    try {
                        fs_1.promises.mkdir(thumbdir);
                        console.log("Create thumb directory");
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
                if (!!fs_2.default.existsSync(filepath)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, resize_1.resize)(file_name, width, height)];
            case 1:
                _a.sent();
                console.log("Create Image");
                _a.label = 2;
            case 2:
                res.status(200).sendFile(filepath);
                console.log("Image sended");
                return [2 /*return*/];
        }
    });
}); });
exports.default = route;

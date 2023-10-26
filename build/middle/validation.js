"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var validate = function (req, res, next) {
    var file_path = (0, path_1.join)(__dirname, "../../../images/".concat(req.query.file_name, ".jpg"));
    // checking all of the parameters to make sure they have values etc
    if (!req.query.file_name) {
        res.status(404).send("No file_name parameter");
    }
    else if (!(0, fs_1.existsSync)(file_path)) {
        res.status(404).send("No file_path");
    }
    else if (!req.query.width) {
        res.status(404).send("No width");
    }
    else if (Number.isNaN(parseInt(req.query.width))) {
        res.status(404).send("Width not a number");
    }
    else if (!req.query.height) {
        res.status(404).send("No height");
    }
    else if (Number.isNaN(parseInt(req.query.height))) {
        res.status(404).send("Height not a number");
    }
    else {
        next();
    }
};
exports.validate = validate;

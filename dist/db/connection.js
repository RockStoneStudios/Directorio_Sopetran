"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
exports.default = mongoose_1.default.connect(config_1.default.DB).then(() => console.log('Database Connected Successful'))
    .catch(error => console.log(error));
//# sourceMappingURL=connection.js.map
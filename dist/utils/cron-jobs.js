"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Open = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const Open = (open) => {
    node_cron_1.default.schedule('* * * * *', () => {
        open = !open;
    });
};
exports.Open = Open;
//# sourceMappingURL=cron-jobs.js.map
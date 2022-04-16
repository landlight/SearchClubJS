"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const binarySearch_1 = __importDefault(require("./binarySearch"));
const jumpSearch_1 = __importDefault(require("./jumpSearch"));
const linearSearch_1 = __importDefault(require("./linearSearch"));
module.exports = {
    linearSearch: linearSearch_1.default,
    binarySearch: binarySearch_1.default,
    jumpSearch: jumpSearch_1.default,
};
//# sourceMappingURL=index.js.map
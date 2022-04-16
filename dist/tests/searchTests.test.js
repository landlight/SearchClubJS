"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const binarySearch_1 = __importDefault(require("../binarySearch"));
const jumpSearch_1 = __importDefault(require("../jumpSearch"));
const linearSearch_1 = __importDefault(require("../linearSearch"));
const types_1 = require("../types");
const testData_1 = require("./testData");
describe(types_1.SearchTypes.LINEAR_SEARCH, () => {
    test.each(testData_1.testItems)(`${types_1.SearchTypes.LINEAR_SEARCH}, in array %p, find %s as argument, returns %e`, (firstArg, secondArg, expectedResult) => {
        const result = (0, linearSearch_1.default)(firstArg, secondArg);
        expect(result).toEqual(expectedResult);
    });
});
describe(types_1.SearchTypes.BINARY_SEARCH, () => {
    test.each(testData_1.sortedTestItems)(`${types_1.SearchTypes.BINARY_SEARCH}, in array %p, find %s as argument, returns %e`, (firstArg, secondArg, expectedResult) => {
        const result = (0, binarySearch_1.default)(firstArg, secondArg);
        expect(result).toEqual(expectedResult);
    });
});
describe(types_1.SearchTypes.JUMP_SEARCH, () => {
    test.each(testData_1.sortedTestItems)(`${types_1.SearchTypes.JUMP_SEARCH}, in array %p, find %s as argument, returns %e`, (firstArg, secondArg, expectedResult) => {
        const result = (0, jumpSearch_1.default)(firstArg, secondArg);
        expect(result).toEqual(expectedResult);
    });
});
//# sourceMappingURL=searchTests.test.js.map
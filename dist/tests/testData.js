"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearchTestItems = exports.testItems = void 0;
exports.testItems = [
    [[], 4, -1],
    [[3, 2, 1], 5, -1],
    [[1, 2, 3], -2, -1],
    [[3, 2, 1], 3, 0],
    [[1, 2, 3], 2, 1],
    [[4, 5, 3, 2, 6, 1], 1, 5]
];
// Binary Search need an array to be sorted
exports.binarySearchTestItems = [
    [[], 4, -1],
    [[3, 2, 1], 5, -1],
    [[1, 2, 3], -2, -1],
    [[1, 2, 3], 3, 2],
    [[1, 2, 3], 2, 1],
    [[1, 2, 3, 4, 5, 6], 1, 0]
];
//# sourceMappingURL=testData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function jumpSearch(inputArray, searchItem) {
    let n = inputArray.length;
    let step = Math.sqrt(n);
    let prev = 0;
    while (inputArray[Math.min(step, n) - 1] < searchItem) {
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n)
            return -1;
    }
    while (inputArray[prev] < searchItem) {
        prev++;
        if (prev == Math.min(step, n))
            return -1;
    }
    if (inputArray[prev] == searchItem)
        return prev;
    return -1;
}
exports.default = jumpSearch;
//# sourceMappingURL=jumpSearch.js.map
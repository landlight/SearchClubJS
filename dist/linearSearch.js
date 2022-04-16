"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function linearSearch(itemsArr, searchItem) {
    for (let i = 0; i < itemsArr.length; i++) {
        if (itemsArr[i] === searchItem) {
            return i;
        }
    }
    return -1;
}
exports.default = linearSearch;
//# sourceMappingURL=linearSearch.js.map
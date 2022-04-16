"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function binarySearch(itemsArr, searchItem) {
    // Sort the array
    itemsArr.sort();
    // Get Center of items 
    let min = 0;
    let max = itemsArr.length - 1;
    if (max < 0) {
        return -1;
    }
    while (max >= min) {
        let guess = Math.round(min + max / 2);
        if ((guess === 0 || guess === itemsArr.length) && itemsArr[guess] !== searchItem) {
            return -1;
        }
        if (itemsArr[guess] === searchItem) {
            return guess;
        }
        if (itemsArr[guess] < searchItem) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }
    }
    return -1;
}
exports.default = binarySearch;
//# sourceMappingURL=binarySearch.js.map
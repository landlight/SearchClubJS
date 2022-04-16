function linearSearch(itemsArr, searchItem) {
    for (let i = 0; i < itemsArr.length; i++) {
        if (itemsArr[i] === searchItem) {
            return i;
        }
    }
    return -1;
}
//# sourceMappingURL=linearSearch.js.map
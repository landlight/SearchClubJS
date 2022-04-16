import binarySearch from "../binarySearch";
import jumpSearch from "../jumpSearch";
import linearSearch from "../linearSearch";
import { SearchTypes } from "../types";
import { testItems, sortedTestItems } from "./testData";

describe(SearchTypes.LINEAR_SEARCH, () => {
  test.each(testItems)(
    `${SearchTypes.LINEAR_SEARCH}, in array %p, find %s as argument, returns %e`,
    (firstArg, secondArg, expectedResult) => {
      const result = linearSearch(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});

describe(SearchTypes.BINARY_SEARCH, () => {
  test.each(sortedTestItems)(
    `${SearchTypes.BINARY_SEARCH}, in array %p, find %s as argument, returns %e`,
    (firstArg, secondArg, expectedResult) => {
      const result = binarySearch(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});

describe(SearchTypes.JUMP_SEARCH, () => {
  test.each(sortedTestItems)(
    `${SearchTypes.JUMP_SEARCH}, in array %p, find %s as argument, returns %e`,
    (firstArg, secondArg, expectedResult) => {
      const result = jumpSearch(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});



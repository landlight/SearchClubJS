import linearSearch from "../linearSearch";
import binarySearch from "../binarySearch";
import { SearchTypes } from "../types";
import { testItems } from "./testData";

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
  test.each(testItems)(
    `${SearchTypes.BINARY_SEARCH}, in array %p, find %s as argument, returns %e`,
    (firstArg, secondArg, expectedResult) => {
      const result = binarySearch(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});



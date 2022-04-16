import linearSearch from "../linearSearch";
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

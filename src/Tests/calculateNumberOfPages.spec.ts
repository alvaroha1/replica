import { calculateNumberOfPages } from "../Helpers/calculateNumberOfPages";

describe("Test calculateNumberOfPages function", () => {
  it("when the number of pages is smaller than the minimum number of items to display", () => {
    const calculateNumberOfPagesFlag = calculateNumberOfPages(4, 5);
    expect(calculateNumberOfPagesFlag).toEqual(1);
  });

  it("when the number of pages is bigger than the minimum number of items to display", () => {
    const calculateNumberOfPagesFlag = calculateNumberOfPages(30,5);
    expect(calculateNumberOfPagesFlag).toEqual(6);
  });

  it("when the number of pages is the same than the minimum number of items to display", () => {
    const calculateNumberOfPagesFlag = calculateNumberOfPages(6,6);
    expect(calculateNumberOfPagesFlag).toEqual(1);
  });

  it("when the number of pages is bigger than the minimum number of items to display and the result has decimals", () => {
    const calculateNumberOfPagesFlag = calculateNumberOfPages(34,5);
    expect(calculateNumberOfPagesFlag).toEqual(7);
  });
});

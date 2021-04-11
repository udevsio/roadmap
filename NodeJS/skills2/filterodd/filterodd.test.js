const filterOddNumbers = require("./filterodd");

test("[1, 2, 3, 4, 5] should be filtered as [2, 4]", () => {
    expect(filterOddNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
});

test("[] should be filtered as []", () => {
    expect(filterOddNumbers([])).toEqual([]);
});

test("[-1, -2, -3, -4, -5] should be filtered as [-2, -4]", () => {
    expect(filterOddNumbers([-1, -2, -3, -4, -5])).toEqual([-2, -4]);
});

test("[0, 2, 4, 6, 8, 10, 1000] should be filtered as [0, 2, 4, 6, 8, 10, 1000]", () => {
    expect(filterOddNumbers([0, 2, 4, 6, 8, 10, 1000])).toEqual([
        0,
        2,
        4,
        6,
        8,
        10,
        1000
    ]);
});

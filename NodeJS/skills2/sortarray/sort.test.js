const sortNumbers = require("./sort");

test("Test 1 ", () => {
    expect(sortNumbers([1, 2, 3])).toEqual([1, 2, 3]);
});

test("Test 2 ", () => {
    expect(sortNumbers([2, 3, 1])).toEqual([1, 2, 3]);
});

test("Test 3 ", () => {
    expect(sortNumbers([2, 3, 1, -1])).toEqual([-1, 1, 2, 3]);
});

test("Test 4 ", () => {
    expect(sortNumbers([1, 3, 5, 3, 4, 4, 2, 6, 8, 7, 6, 9, 10])).toEqual([
        1,
        2,
        3,
        3,
        4,
        4,
        5,
        6,
        6,
        7,
        8,
        9,
        10
    ]);
});

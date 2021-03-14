const mapNumbersToJSON = require("./mapnumbers");

test("map program test 1 ", () => {
    expect(mapNumbersToJSON([1])).toEqual([{ id: 1 }]);
});

test("map program test 2 ", () => {
    expect(mapNumbersToJSON([-1])).toEqual([{ id: -1 }]);
});

test("map program test 3 ", () => {
    expect(mapNumbersToJSON([])).toEqual([]);
});

test("map program test 4 ", () => {
    expect(mapNumbersToJSON([-1, -2, -3, -4, -5])).toEqual([
        { id: -1 },
        { id: -2 },
        { id: -3 },
        { id: -4 },
        { id: -5 }
    ]);
});

test("map program test 5 ", () => {
    expect(mapNumbersToJSON([1, 2, 3, 4, 5])).toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
    ]);
});

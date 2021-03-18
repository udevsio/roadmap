const hasDuplicateInArray = require("./hasduplicate");

test(`[1, 1, 1, 1, 1, 1, 1, "1"] should return output ->  [1, "1"]`, () => {
    expect(hasDuplicateInArray([1, 1, 1, 1, 1, 1, 1, "1"])).toEqual([1, "1"]);
});

test(`[1, 2, 3, 4, 5, 6, 1, "1"] should return output ->  [1, 2, 3, 4, 5, 6, "1"]`, () => {
    expect(hasDuplicateInArray([1, 2, 3, 4, 5, 6, 1, "1"])).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        "1"
    ]);
});

test(`["madiyor", "Madiyor", "madiyor", "udevs", "io"] should return output -> ["madiyor", "Madiyor", "udevs", "io"]`, () => {
    expect(
        hasDuplicateInArray(["madiyor", "Madiyor", "madiyor", "udevs", "io"])
    ).toEqual(["madiyor", "Madiyor", "udevs", "io"]);
});

test("[] should return output ->  []", () => {
    expect(hasDuplicateInArray([])).toEqual([]);
});

test("[1] should return output ->  [1]", () => {
    expect(hasDuplicateInArray([1])).toEqual([1]);
});

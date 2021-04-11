const oddEvenSum = require("./odd_even_sum");

test("odd sum for number 12345678 is 16", () => {
    expect(oddEvenSum(12345678)[0]).toEqual(16);
});

test("even sum for number 12345678 is 20", () => {
    expect(oddEvenSum(12345678)[1]).toEqual(20);
});

test("odd sum for number 87654321 is 16", () => {
    expect(oddEvenSum(87654321)[0]).toEqual(16);
});

test("even sum for number 87654321 is 20", () => {
    expect(oddEvenSum(87654321)[1]).toEqual(20);
});

test("odd sum for number 100 is 0", () => {
    expect(oddEvenSum(100)[0]).toEqual(0);
});

test("even sum for number 100 is 1", () => {
    expect(oddEvenSum(100)[1]).toEqual(1);
});

test("odd sum for number 1000 is 1", () => {
    expect(oddEvenSum(1000)[0]).toEqual(1);
});

test("even sum for number 1000 is 0", () => {
    expect(oddEvenSum(1000)[1]).toEqual(0);
});

test("odd sum for number 56897 is 20", () => {
    expect(oddEvenSum(56897)[0]).toEqual(20);
});

test("even sum for number 56897 is 15", () => {
    expect(oddEvenSum(56897)[1]).toEqual(15);
});

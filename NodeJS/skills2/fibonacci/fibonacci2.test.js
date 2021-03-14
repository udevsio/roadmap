const { fibonacci_non_recursive } = require("./fibonacci");

describe("Basic input outputs", () => {
    test("0th fibonacci_non_recursive number equqal to 0", () => {
        expect(fibonacci_non_recursive(0)).toBe(0);
    });

    test("first fibonacci_non_recursive number equal to 1", () => {
        expect(fibonacci_non_recursive(1)).toBe(1);
    });

    test("second fibonacci_non_recursive number equal to 1", () => {
        expect(fibonacci_non_recursive(2)).toBe(1);
    });
    test("third fibonacci_non_recursive number equal to 2", () => {
        expect(fibonacci_non_recursive(3)).toBe(2);
    });

    test("10th fibonacci_non_recursive number equal to 55", () => {
        expect(fibonacci_non_recursive(10)).toBe(55);
    });

    test("20th fibonacci_non_recursive number equal to 6765", () => {
        expect(fibonacci_non_recursive(20)).toBe(6765);
    });
});

describe("Tricky input outputs", () => {
    test("Below 0 fibonacci_non_recursive numbers are -1", () => {
        expect(fibonacci_non_recursive(-10)).toBe(-1);
    });

    test("Below 0 fibonacci_non_recursive numbers are -1", () => {
        expect(fibonacci_non_recursive(-1000)).toBe(-1);
    });
});

describe("Throws an error if input is not a number", () => {
    test("undefined input throws an error", () => {
        expect(() => {
            fibonacci_non_recursive(undefined);
        }).toThrow(TypeError("input must be integer"));
    });

    test("null input throws an error", () => {
        expect(() => {
            fibonacci_non_recursive(null);
        }).toThrow(TypeError("input must be integer"));
    });

    test("NaN input throws an error", () => {
        expect(() => {
            fibonacci_non_recursive(NaN);
        }).toThrow(TypeError("input must be integer"));
    });

    test("[] input throws an error", () => {
        expect(() => {
            fibonacci_non_recursive([]);
        }).toThrow(TypeError("input must be integer"));
    });

    test("`abc` input throws an error", () => {
        expect(() => {
            fibonacci_non_recursive("abc");
        }).toThrow(TypeError("input must be integer"));
    });
});

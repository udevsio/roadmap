const { fibonacci } = require("./fibonacci");

describe("Basic input outputs", () => {
    test("0th fibonacci number equqal to 0", () => {
        expect(fibonacci(0)).toBe(0);
    });

    test("first fibonacci number equal to 1", () => {
        expect(fibonacci(1)).toBe(1);
    });

    test("second fibonacci number equal to 1", () => {
        expect(fibonacci(2)).toBe(1);
    });
    test("third fibonacci number equal to 2", () => {
        expect(fibonacci(3)).toBe(2);
    });

    test("10th fibonacci number equal to 55", () => {
        expect(fibonacci(10)).toBe(55);
    });

    test("20th fibonacci number equal to 6765", () => {
        expect(fibonacci(20)).toBe(6765);
    });
});

describe("Tricky input outputs", () => {
    test("Below 0 fibonacci numbers are -1", () => {
        expect(fibonacci(-10)).toBe(-1);
    });

    test("Below 0 fibonacci numbers are -1", () => {
        expect(fibonacci(-1000)).toBe(-1);
    });
});

describe("Throws an error if input is not a number", () => {
    test("undefined input throws an error", () => {
        expect(() => {
            fibonacci(undefined);
        }).toThrow(TypeError("input must be integer"));
    });

    test("null input throws an error", () => {
        expect(() => {
            fibonacci(null);
        }).toThrow(TypeError("input must be integer"));
    });

    test("NaN input throws an error", () => {
        expect(() => {
            fibonacci(NaN);
        }).toThrow(TypeError("input must be integer"));
    });

    test("[] input throws an error", () => {
        expect(() => {
            fibonacci([]);
        }).toThrow(TypeError("input must be integer"));
    });

    test("`abc` input throws an error", () => {
        expect(() => {
            fibonacci("abc");
        }).toThrow(TypeError("input must be integer"));
    });
});

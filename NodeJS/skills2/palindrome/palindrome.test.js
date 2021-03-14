const isPalindrome = require("./palindrome");

test("returns false for the word udevs-node", () => {
    expect(isPalindrome("udevs-node")).toEqual(false);
});

test("returns true for the word saippuakivikauppias", () => {
    expect(isPalindrome("saippuakivikauppias")).toEqual(true);
});

test("returns false for the word !@#^&^%$", () => {
    expect(isPalindrome("!@#^&^%$")).toEqual(false);
});

test("returns false for the word !@#$%^&*()_+_)(*&^%$#@!", () => {
    expect(isPalindrome("!@#$%^&*()_+_)(*&^%$#@!")).toEqual(true);
});

test("returns false for the word !№;%:?*()ЩШГНЕКУЦЙЙЦУКЕНГШЩ)(*?:%;№!", () => {
    expect(isPalindrome("!№;%:?*()ЩШГНЕКУЦЙЙЦУКЕНГШЩ)(*?:%;№!")).toEqual(true);
});

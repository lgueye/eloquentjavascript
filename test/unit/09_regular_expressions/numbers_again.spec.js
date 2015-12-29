function chekcExpectation(regexp, input, expected) {
    input.forEach(function(s) {
        // When
        var actual = regexp.test(s);
        // Then
        if (actual !== expected) {
            console.log("Failure to match '" + s + "'");
        }
        expect(actual).toEqual(expected);
    });
}

describe("numbers again test suite", function() {
    it("javascript valid numbers regexp", function() {
        var regexp = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;
        chekcExpectation(regexp, ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
            "1e+12"
        ], true);
        chekcExpectation(regexp, ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
            "."
        ], false);
    });
});

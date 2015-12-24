describe("sequence interface test suite", function() {
    it("logFive(new ArraySeq([1, 2])) should log first 2 results", function() {
        // Given
        var input = new ArraySeq([1, 2]);

        // When
        var actual = takeFive(input);

        // Then
        expect(actual).toEqual([1, 2]);
    });
    it("logFive(new RangeSeq(100, 1000)) should log first 5 results", function() {
        // Given
        var input = new RangeSeq(100, 1000);

        // When
        var actual = takeFive(input);

        // Then
        expect(actual).toEqual([100, 101, 102, 103, 104]);
    });
});

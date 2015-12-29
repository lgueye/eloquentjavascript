describe("retry test suite", function() {
    it("reliableMultiply(8, 8) should return 64", function() {
        // Given
        var a = 8;
        var b = 8;

        // When
        var actual = reliableMultiply(a, b);

        // Then
        expect(actual).toEqual(a * b);
    });
});

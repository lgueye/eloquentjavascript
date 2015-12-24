describe("flattening test suite", function() {
    it("flattenArray([[1, 2, 3], [4, 5], [6]]) should return [1, 2, 3, 4, 5, 6]", function() {
        // Given
        var input = [
            [1, 2, 3],
            [4, 5],
            [6]
        ];

        // When
        var actual = flattenArray(input);

        // Then
        var expected = [1, 2, 3, 4, 5, 6];
        expect(expected).toEqual(actual);
    });
});

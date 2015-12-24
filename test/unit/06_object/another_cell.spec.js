describe("another cell test suite", function() {
    it("new StretchCell(new TextCell('abc'), 1, 2).minWidth() should return 3", function() {
        // Given
        var input = new StretchCell(new TextCell('abc'), 1, 2);

        // When
        var actual = input.minWidth();

        // Then
        expect(actual).toEqual(3);
    });
    it("new StretchCell(new TextCell('abc'), 1, 2).minHeight() should return 2", function() {
        // Given
        var input = new StretchCell(new TextCell('abc'), 1, 2);

        // When
        var actual = input.minHeight();

        // Then
        expect(actual).toEqual(2);
    });
    it("new StretchCell(new TextCell('abc'), 1, 2).draw(3, 2) should return ['abc', '   ']", function() {
        // Given
        var input = new StretchCell(new TextCell('abc'), 1, 2);

        // When
        var actual = input.draw(3, 2);

        // Then
        expect(actual).toEqual(['abc', '   ']);
    });
});

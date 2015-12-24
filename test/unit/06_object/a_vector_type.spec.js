describe("vector type test suite", function() {
    it("new Vector(1, 2).plus(new Vector(2, 3)) should return Vector{x: 3, y: 5}", function() {
        // Given
        var left = new Vector(1, 2);
        var right = new Vector(2, 3);

        // When
        var actual = left.plus(right);

        // Then
        var expected = new Vector(3, 5);
        expect(expected).toEqual(actual);
    });
    it("new Vector(1, 2).minus(new Vector(2, 3)) should return Vector{x: -1, y: -1}", function() {
        // Given
        var left = new Vector(1, 2);
        var right = new Vector(2, 3);

        // When
        var actual = left.minus(right);

        // Then
        var expected = new Vector(-1, -1);
        expect(expected).toEqual(actual);
    });
    it("new Vector(3, 4).length should return 5", function() {
        // Given
        var input = new Vector(3, 4);

        // When
        var actual = input.length;

        // Then
        expect(5).toEqual(actual);
    });
});

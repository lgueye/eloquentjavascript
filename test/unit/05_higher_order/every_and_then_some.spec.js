describe("every then some test suite", function() {
    it("every([NaN, NaN, NaN], isNaN) should return true", function() {
        // Given
        var input = [NaN, NaN, NaN];
        var predicate = isNaN;

        // When
        var actual = every(input, predicate);

        // Then
        expect(true).toEqual(actual);
    });
    it("every([NaN, NaN, 4], isNaN) should return false", function() {
        // Given
        var input = [NaN, NaN, 4];
        var predicate = isNaN;

        // When
        var actual = every(input, predicate);

        // Then
        expect(false).toEqual(actual);
    });
    it("some([NaN, 3, 4], isNaN) should return true", function() {
        // Given
        var input = [NaN, 3, 4];
        var predicate = isNaN;

        // When
        var actual = some(input, predicate);

        // Then
        expect(true).toEqual(actual);
    });
    it("some([2, 3, 4], isNaN) should return false", function() {
        // Given
        var input = [2, 3, 4];
        var predicate = isNaN;

        // When
        var actual = some(input, isNaN);

        // Then
        expect(false).toEqual(actual);
    });




    it("everyRecursive([NaN, NaN, NaN], isNaN) should return true", function() {
        // Given
        var input = [NaN, NaN, NaN];
        var predicate = isNaN;

        // When
        var actual = everyRecursive(input, predicate);

        // Then
        expect(true).toEqual(actual);
    });
    it("everyRecursive([NaN, NaN, 4], isNaN) should return false", function() {
        // Given
        var input = [NaN, NaN, 4];
        var predicate = isNaN;

        // When
        var actual = everyRecursive(input, predicate);

        // Then
        expect(false).toEqual(actual);
    });
    it("someRecursive([NaN, 3, 4], isNaN) should return true", function() {
        // Given
        var input = [NaN, 3, 4];
        var predicate = isNaN;

        // When
        var actual = someRecursive(input, predicate);

        // Then
        expect(true).toEqual(actual);
    });
    it("someRecursive([2, 3, 4], isNaN) should return false", function() {
        // Given
        var input = [2, 3, 4];
        var predicate = isNaN;

        // When
        var actual = someRecursive(input, isNaN);

        // Then
        expect(false).toEqual(actual);
    });
});

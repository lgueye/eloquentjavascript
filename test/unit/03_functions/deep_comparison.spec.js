describe("deep comparison test suite", function() {
    it("deepEqual of same reference should return true", function() {
        // Given
        var o1 = {
            here: {
                is: "an"
            },
            object: 2
        };

        // When
        var actual = deepEqual(o1, o1);

        // Then
        expect(true).toEqual(actual);
    });
    it("deepEqual of different structures should return false", function() {
        // Given
        var o1 = {
            here: {
                is: "an"
            },
            object: 2
        };
        var o2 = {
            here: 1,
            object: 2
        };

        // When
        var actual = deepEqual(o1, o2);

        // Then
        expect(false).toEqual(actual);
    });
    it("deepEqual of different reference but same structure should return true", function() {
        // Given
        var o1 = {
            here: {
                is: "an"
            },
            object: 2
        };
        var o2 = {
            here: {
                is: "an"
            },
            object: 2
        };

        // When
        var actual = deepEqual(o1, o2);

        // Then
        expect(true).toEqual(actual);
    });
});

describe("looping triangle test suite", function() {
    it("looping triangle should succeed", function() {
        // Given
        var input = 12;

        // When
        var actual = loopingTriangle(input);

        // Then
        var lines = actual.split("\n");
        expect(lines.length).toEqual(input);

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            expect(line.length).toEqual(i + 1);
        }
    });
});

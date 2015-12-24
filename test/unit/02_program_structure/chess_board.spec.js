describe("chess board test suite", function() {
    it("chess board should succeed", function() {
        // Given
        var gridSize = 8;

        // When
        var actual = chessBoard(gridSize);

        // Then
        expect(actual.length).toEqual(gridSize * (gridSize + 1) - 1);
        var lines = actual.split("\n");
        expect(lines.length).toEqual(gridSize);
        var expected;
        for (var i = 0; i < gridSize; i++) {
            var line = lines[i];
            for (var j = 0; j < gridSize; j++) {
                var char = line.charAt(j);
                expected = " ";
                if ((i + j) % 2 !== 0) {
                    expected = "#";
                }
                expect(expected).toEqual(char);
            }
        }
    });
});

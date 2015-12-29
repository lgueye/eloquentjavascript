describe("mother child age difference test suite", function() {
    it("average mother child difference should return 31.2", function() {
        // When
        var actual = averageMotherChildAgeDifference(ancestry);

        // Then
        expect(Number("31.22")).toEqual(Number(actual.toFixed(2)));
    });
});

describe("historical life expectancy test suite", function() {
    it("historical life expectancy should succeed", function() {
        // When
        var actual = historicalLifeExpectancy(ancestry);

        // Then
        expect(Number("43.5")).toEqual(Number(actual['16'].toFixed(1)));
        expect(Number("51.2")).toEqual(Number(actual['17'].toFixed(1)));
        expect(Number("52.8")).toEqual(Number(actual['18'].toFixed(1)));
        expect(Number("54.8")).toEqual(Number(actual['19'].toFixed(1)));
        expect(Number("84.7")).toEqual(Number(actual['20'].toFixed(1)));
        expect(Number("94.0")).toEqual(Number(actual['21'].toFixed(1)));
    });
});

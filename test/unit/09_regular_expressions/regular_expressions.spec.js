function chekcExpectation(regexp, input, expected) {
    input.forEach(function(s) {
        // When
        var actual = regexp.test(s);
        // Then
        if (actual !== expected) {
            console.log("Failure to match '" + s + "'");
        }
        expect(actual).toEqual(expected);
    });
}

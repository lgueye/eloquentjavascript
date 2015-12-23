describe("minimum test suite", function () {
  it("minimum should return 0 for (0,  10)", function () {
    // Given
    var expected = 0;
    var b = 10;

    // When
    var actual = min(expected, b);

    // Then
    expect(expected).toEqual(actual);
  });
  it("minimum should return -10 for (0,  -10)", function () {
    // Given
    var a = 0;
    var expected = -10;

    // When
    var actual = min(a, expected);

    // Then
    expect(expected).toEqual(actual);
  });
});


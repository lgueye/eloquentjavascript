describe("minimum test suite", function () {
  it("isEven should return true for 50", function () {
    // Given
    var input = 50;

    // When
    var actual = isEven(input);

    // Then
    expect(true).toEqual(actual);
  });
  it("isEven should return false for 75", function () {
    // Given
    var input = 75;

    // When
    var actual = isEven(input);

    // Then
    expect(false).toEqual(actual);
  });
});


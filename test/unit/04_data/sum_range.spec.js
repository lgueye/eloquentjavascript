describe("sum range test suite", function () {
  it("sum(range(1, 10)) should return 55", function () {
    // Given
    var begin = 1;
    var end = 10;

    // When
    var actual = sum(range(begin, end));

    // Then
    expect(55).toEqual(actual);
  });
  it("range(5, 2, -1)) should return [5, 4, 3, 2]", function () {
    // Given
    var begin = 5;
    var end = 2;
    var step = -1;

    // When
    var actual = range(begin, end, step);

    // Then
    expect([5, 4, 3, 2]).toEqual(actual);
  });
});


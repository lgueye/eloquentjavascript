describe("reversing array test suite", function () {
  it("reverseArray(['A', 'B', 'C']) should return ['C', 'B', 'A']", function () {
    // Given
    var input = ['A', 'B', 'C'];

    // When
    var actual = reverseArray(input);

    // Then
    expect(['C', 'B', 'A']).toEqual(actual);
  });
  it("reverseArrayInPlace([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1]", function () {
    // Given
    var input = [1, 2, 3, 4, 5];

    // When
    reverseArrayInPlace(input);

    // Then
    expect([5, 4, 3, 2, 1]).toEqual(input);
  });
});


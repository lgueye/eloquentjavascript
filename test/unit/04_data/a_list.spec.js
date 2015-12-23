describe("list implementation test suite", function () {
  it("arrayToList([10, 20]) should return {value: 10, rest: {value: 20, rest: null}}", function () {
    // Given
    var input = [10, 20];

    // When
    var actual = arrayToList(input);

    // Then
    var expected = {value: 10, rest: {value: 20, rest: null}};
    expect(expected).toEqual(actual);
  });
  it("listToArray(arrayToList([10, 20, 30])) should return [10, 20, 30]", function () {
    // Given
    var input = [10, 20, 30];

    // When
    var actual = listToArray(arrayToList(input));

    // Then
    expect(input).toEqual(actual);
  });
  it("prepend(10, prepend(20, null)) should return {value: 10, rest: {value: 20, rest: null}}", function () {
    // When
    var actual = prepend(10, prepend(20, null));

    // Then
    var expected = {value: 10, rest: {value: 20, rest: null}};
    expect(expected).toEqual(actual);
  });
  it("nth(arrayToList([10, 20, 30]), 1) should return 20", function () {
    // When
    var actual = nth(arrayToList([10, 20, 30]), 1);

    // Then
    expect(20).toEqual(actual);
  });
});


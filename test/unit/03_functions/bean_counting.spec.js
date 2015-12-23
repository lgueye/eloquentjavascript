describe("minimum test suite", function () {
  it("countBs should return 2 for 'BBC'", function () {
    // Given
    var input = "BBC";

    // When
    var actual = countBs(input);

    // Then
    expect(2).toEqual(actual);
  });
  it("countChar should return 4 for ('kakkerlak', 'k')", function () {
    // Given
    var input = "kakkerlak";
    var pattern = "k";

    // When
    var actual = countChar(input, pattern);

    // Then
    expect(4).toEqual(actual);
  });
});


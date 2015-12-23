describe("fizz buzz test suite", function () {
  it("fizz buzz should succeed", function () {
    // Given
    for (var input = 1; input <= 100; input++) {
      var actual = fizzBuzz(input);
      var expected = input;
      if (input % 5 === 0 && input % 3 === 0) {
        expected = "FizzBuzz";
      } else if (input % 3 === 0) {
        expected = "Fizz";
      } else if (input % 5 === 0) {
        expected = "Buzz";
      }
      expect(actual).toEqual(expected);
    }
  });
});


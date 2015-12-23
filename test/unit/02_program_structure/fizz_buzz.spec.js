describe("fizz buzz test suite", function () {
  it("fizz buzz should succeed", function () {
    for (var input = 1; input <= 100; input++) {
      // When
      var actual = fizzBuzz(input);

      // Then
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


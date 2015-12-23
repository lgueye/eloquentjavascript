describe("FizzBuzz specs", function () {
  it("should return succeed", function () {
    // Given
    for (var input = 1; input <= 100; input++) {
      var actual = fizzBuzz(input);
      var expected;
      if (input % 5 === 0 && input % 3 === 0) {
        expected = "FizzBuzz";
        expect(actual).toEqual(expected);
      } else if (input % 3 === 0) {
        expected = "Fizz";
        expect(actual).toEqual(expected);
      } else if (input % 5 === 0) {
        expected = "Buzz";
        expect(actual).toEqual(expected);
      } else {
        expected = input;
        expect(actual).toEqual(expected);
      }
    }
  });
});


function range(start, end, step) {
  var result = [];
  var internalStep = (step === undefined) ? 1 : step;
  var i;
  if (start < end) {
    for (i = start; i <= end; i += internalStep) {
      result.push(i);
    }
  } else {
    for (i = start; i >= end; i += internalStep) {
      result.push(i);
    }
  }
  return result;
}

function sum(input) {
  var result = 0;
  for (var i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}

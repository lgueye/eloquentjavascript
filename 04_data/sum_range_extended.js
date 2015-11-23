function range(start, end, step) {
  var result = [];
  var internalStep = (step == undefined) ? 1 : step;
  var i = 0;
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
  for (var item of input) result += item;
  return result;
}
console.log(sum(range(1, 10)));
// → 55
console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
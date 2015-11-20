function range(start, end) {
  var result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

function sum(input) {
  var result = 0;
  for (var item of input) {
    result += item;
  }
  return result;
}
console.log(sum(range(1, 10)));
// → 55
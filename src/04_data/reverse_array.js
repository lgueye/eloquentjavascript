function reverseArray(input) {
  var result = [];
  for (var item in input) {
    result.unshift(item);
  }
  return result;
}

function reverseArrayInPlace(input) {
  for (var index = 0; index < input.length / 2; index++) {
    var tmp;
    var sourceIndex = index;
    var targetIndex = input.length -1 - sourceIndex;
    tmp = input[sourceIndex];
    input[sourceIndex] = input[targetIndex];
    input[targetIndex] = tmp;
  }
}

//console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
//var arrayValue = [1, 2, 3, 4, 5];
//reverseArrayInPlace(arrayValue);
//console.log(arrayValue);
// → [5, 4, 3, 2, 1]
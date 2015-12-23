function loopingTriangle(input) {
  var result = "";
  for (var i = 0; i < input; i++) {
    for (var j = 0; j < i + 1; j++) {
      result += "#";
      if (i === j && i !== input -1) result += "\n";
    }
  }
  return result;
}


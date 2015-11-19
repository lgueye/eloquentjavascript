function loopingTriangle() {
  var result = [];
  for (var i = 0; i < 7; i++) {
    var item = buildItem(i+1);
    result.push(item);
  }
  return result;
}

function buildItem(i) {
  var item = "";
  for (var index = 0; index < i; index ++) {
    item += "#";
  }
  return item;
}

loopingTriangle().forEach(console.log);

function fizzBuzz1() {
  var result = [0];
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) result.push("Fizz");
    else if (i % 5 == 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}
fizzBuzz1().forEach(console.log);

function fizzBuzz2() {
  var result = [0];
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) result.push("FizzBuzz");
    else if (i % 3 == 0) result.push("Fizz");
    else if (i % 5 == 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}
fizzBuzz2().forEach(console.log);

function chessBoard(gridSize) {
  var result = "";
  for (var i = 0; i < gridSize; i++) {
    result += buildNewLine(gridSize, i);
  }
  return result;
}
function buildNewLine(gridSize, j) {
  var line = "";
  for (var i = 0; i < gridSize; i++) {
    line += (i+j) % 2 != 0 ? "#" : " ";
  }
  return line + "\n";
}
console.log(chessBoard(8));


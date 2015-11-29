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

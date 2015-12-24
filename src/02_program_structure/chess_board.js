function chessBoard(gridSize) {
    var result = "";
    for (var i = 1; i <= gridSize; i++) {
        for (var j = 1; j <= gridSize; j++) {
            result += (i + j) % 2 !== 0 ? "#" : " ";
            result += (j === gridSize && i !== gridSize) ? "\n" : "";
        }
    }
    return result;
}

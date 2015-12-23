function loopingTriangle() {
  var result = [];
  for (var i = 0; i < 7; i++) {
    var item = buildItem(i+1);
    result.push(item);
  }
  return result;
}

function loopingTriangleString() {
  return loopingTriangle().join("\n");
}

function buildItem(i) {
  var item = "";
  for (var index = 0; index < i; index ++) {
    item += "#";
  }
  return item;
}
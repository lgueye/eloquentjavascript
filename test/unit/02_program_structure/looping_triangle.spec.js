describe("Looping triangle specs", function() {
  it("should build an array triangle", function() {
    var actual = loopingTriangle();
    var expectedArray = ["#", "##", "###", "####", "#####", "######", "#######"];
    expect(actual).toEqual(expectedArray);
  });
  it("should build a triangle string", function() {
    var actual = loopingTriangleString();
    var expectedString = "#\n##\n###\n####\n#####\n######\n#######";
    //console.log(expectedString);
    expect(actual).toEqual(expectedString);
  });
});


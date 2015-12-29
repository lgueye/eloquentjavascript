describe("quoting style test suite", function() {
    it("replace single quotes by double quotes", function() {
        var regexp = /(^|\W)'|(\W|$)'/g;
        var text = "'I'm the cook,' he said, 'it's my job.'";
        var replaced = text.replace(regexp, '$1"$2');
        expect(replaced).toEqual("\"I'm the cook,\" he said, \"it's my job.\"");
    });
});

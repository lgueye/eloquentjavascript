describe("regexp golf test suite", function() {
    it("car and cat regexp", function() {
        var regexp = /ca[rt]/;
        chekcExpectation(regexp, ["my car", "bad cats"], true);
        chekcExpectation(regexp, ["camper", "high art"], false);
    });
    it("pop and prop regexp", function() {
        var regexp = /p(r?)op/;
        chekcExpectation(regexp, ["pop culture", "mad props"], true);
        chekcExpectation(regexp, ["plop"], false);
    });
    it("ferret, ferry, and ferrari regexp", function() {
        var regexp = /ferr(et|y|ari)/;
        chekcExpectation(regexp, ["ferret", "ferry", "ferrari"], true);
        chekcExpectation(regexp, ["ferrum", "transfer A"], false);
    });
    it("Any word ending in ious regexp", function() {
        var regexp = /ious\b/;
        chekcExpectation(regexp, ["how delicious", "spacious room"], true);
        chekcExpectation(regexp, ["ruinous", "consciousness"], false);
    });
    it("A whitespace character followed by a dot, comma, colon, or semicolon regexp", function() {
        var regexp = /\s\W/;
        chekcExpectation(regexp, ["bad punctuation ."], true);
        chekcExpectation(regexp, ["escape the dot"], false);
    });
    it("A word longer than six letters regexp", function() {
        var regexp = /\w{7,}/;
        chekcExpectation(regexp, ["hottentottententen"], true);
        chekcExpectation(regexp, ["no", "hotten totten tenten"], false);
    });
    it("A word without the letter e regexp", function() {
        var regexp = /\b[a-df-z]+\b/i;
        chekcExpectation(regexp, ["red platypus", "wobbling nest"], true);
        chekcExpectation(regexp, ["earth bed", "learning ape"], false);
    });
});

function countBs(input) {
    return countChar(input, "B");
}

function countChar(input, target) {
    var result = 0;
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) == target) {
            result++;
        }
    }
    return result;
}

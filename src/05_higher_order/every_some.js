function every(input, predicate) {
    var result = true;
    input.forEach(function(item) {
        if (!predicate(item)) {
            result = false;
            return;
        }
    });
    return result;
}

function some(input, predicate) {
    var result = false;
    input.forEach(function(item) {
        if (predicate(item)) {
            result = true;
            return;
        }
    });
    return result;
}

function everyRecursive(input, predicate) {
    if (!input || input.length === 0) return false;
    if (input.length == 1) return predicate(input.pop());
    return predicate(input.pop()) && everyRecursive(input, predicate);
}

function someRecursive(input, predicate) {
    if (!input || input.length === 0) return false;
    if (input.length == 1) return predicate(input.pop());
    return predicate(input.pop()) || someRecursive(input, predicate);
}

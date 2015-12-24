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

//console.log(every([NaN, NaN, NaN], isNaN));
// → true
//console.log(every([NaN, NaN, 4], isNaN));
// → false
//console.log(some([NaN, 3, 4], isNaN));
// → true
//console.log(some([2, 3, 4], isNaN));
// → false

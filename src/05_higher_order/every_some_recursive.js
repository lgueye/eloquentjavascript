function every(input, predicate) {
    if (!input || input.length === 0) return false;
    if (input.length == 1) return predicate(input.pop());
    return predicate(input.pop()) && every(input, predicate);
}

function some(input, predicate) {
    if (!input || input.length === 0) return false;
    if (input.length == 1) return predicate(input.pop());
    return predicate(input.pop()) || some(input, predicate);
}

//console.log(every([NaN, NaN, NaN], isNaN));
// → true
//console.log(every([NaN, NaN, 4], isNaN));
// → false
//console.log(some([NaN, 3, 4], isNaN));
// → true
//console.log(some([2, 3, 4], isNaN));
// → false

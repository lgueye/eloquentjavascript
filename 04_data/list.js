function arrayToList(input) {
    if (input == undefined || input.length == 0) return {value: null, rest: null};
    if (input.length == 1) return {value: input[0], rest: null};
    return {value: input[0], rest: arrayToList(input.slice(1, input.length))};
}
function listToArray(input) {
    if (input == undefined || input.value == undefined) return [];
    var result = [];
    result.push(input.value);
    var currentRest = input.rest;
    while (currentRest) {
        result.push(currentRest.value);
        currentRest = currentRest.rest;
    }
    return result;
}
function prepend(element, list) {
    var result = {value:element, rest:list};
    return result;
}
function nth(list, index) {
    if (!list) return null;
    if (index == 0) return list.value;
    return nth(list.rest, index - 1)
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
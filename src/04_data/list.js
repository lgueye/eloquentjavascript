function arrayToList(input) {
    if (input === undefined || input.length === 0) return {
        value: null,
        rest: null
    };
    if (input.length === 1) return {
        value: input[0],
        rest: null
    };
    return {
        value: input[0],
        rest: arrayToList(input.slice(1, input.length))
    };
}

function listToArray(input) {
    if (input === undefined || input.value === undefined) return [];
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
    return {
        value: element,
        rest: list
    };
}

function nth(list, index) {
    if (!list) return null;
    if (index === 0) return list.value;
    return nth(list.rest, index - 1);
}

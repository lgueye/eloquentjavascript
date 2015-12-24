function historicalLifeExpectancy(input) {
    var personByCentury = groupBy(input, function(person) {
        return Math.ceil(person.died / 100);
    });
    var result = {};
    for (var key in personByCentury) {
        result[key] = average(personByCentury[key].map(function(person) {
            return person.died - person.born;
        }));
    }
    return result;
}

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

function groupBy(array, groupCondition) {
    var groups = {};
    array.forEach(function(person) {
        group = groupCondition(person);
        if (group in groups) {
            groups[group].push(person);
        } else {
            groups[group] = [person];
        }
    });
    return groups;
}

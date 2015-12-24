function averageMotherChildAgeDifference(input) {
    var byName = {};
    input.forEach(function(person) {
        byName[person.name] = person;
    });
    var filteredAncestry = input.filter(function(person) {
        return byName[person.mother];
    });
    var differences = filteredAncestry.map(function(person) {
        return person.born - byName[person.mother].born;
    });
    return average(differences);
}

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}
//
//var byName = {};
//ancestry.forEach(function(person) {
//    byName[person.name] = person;
//});
//var filteredAncestry = ancestry.filter(function(person) {
//    return byName[person.mother];
//});
//var differences = filteredAncestry.map(function(person) {
//    return person.born - byName[person.mother].born;
//});
////console.log(average(differences));

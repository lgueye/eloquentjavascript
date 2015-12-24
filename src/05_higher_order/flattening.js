function flattenArray(input) {
    return input.reduce(function(a, b) {
        return a.concat(b);
    }, []);
}

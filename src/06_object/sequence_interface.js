function takeFive(input) {
    var result = [];
    while (input.hasNext() && result.length < 5) {
        result.push(input.next());
    }
    return result;
}

function ArraySeq(input) {
    this.array = input;
}

ArraySeq.prototype.hasNext = function() {
    return this.array !== null && this.array.length !== 0;
};

ArraySeq.prototype.next = function() {
    return this.array.shift();
};

function RangeSeq(begin, end) {
    this.begin = begin;
    this.end = end;
}

RangeSeq.prototype.hasNext = function() {
    return this.begin < this.end;
};

RangeSeq.prototype.next = function() {
    var next = this.begin;
    this.begin++;
    return next;
};

function getSum(term) {
    let sum = 0;

    return function (term) {
        sum += term;
        return sum;
    }
}

const sum = getSum();


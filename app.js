const array = [4, 2.3, "item", 4, "O2", 3.4, 4.5, "value", "No342", 5.6, 3.4, 2];

function sumNumbers(array) {
    const result = array.filter(function (item) {
        return !Number.isNaN(Number(item));
    });
    const sum = result.reduce(function (sum, item) {
        return  sum + item;
    }, 0)
    return Math.round((sum / result.length) * 100) / 100;
}

console.log(sumNumbers(array));

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return Number(x) + Number(y);
        case '-':
            return Number(x) - Number(y);
        case '*':
            return Number(x) * Number(y);
        case '/':
            return Number(x) / Number(y);           
        case '%':
            return Number(x) % Number(y);
        case '^':
            return Math.pow(x, y);
    }
}

const x = prompt('Enter x');
const y = prompt('Enter y');
const znak = prompt('Enter znak');
console.log(doMath(x, znak, y));

function pushArray() {
    const basicLength = prompt('Enter length basic array');
    let itemLength = 0;
    const result = [];
    for (let i = 0; i < basicLength; i++) {
        itemLength = prompt(`Enter length ${i + 1}st array`);
        result[i] = [];
        for (let j = 0; j < itemLength; j++) {
            result[i][j] = prompt(`Enter ${j + 1}st item of ${i + 1}st array`);            
        }        
    }
    return result;
}

console.log(pushArray());

function deleteSimbolsToString(string, patterns) {
    for(item of patterns) {
        string = string.replaceAll(item, '');        
    }
    return string;
}

const string = prompt('Enter string');
const length = prompt('Enter number symbol of patterns');
const patterns = [];
for (let i = 0; i < length; i++) {
    patterns[i] = prompt('Enter symbol of patterns');
    
}

console.log(deleteSimbolsToString(string, patterns));

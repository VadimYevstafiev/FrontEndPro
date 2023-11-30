console.log('# 1');
let numbers = [];
for (let i = 10; i <= 20; i++) {
    numbers.push(i);
}
console.log(numbers.toString());

console.log('# 2');
const squares = numbers.map(function (number) {
    return number * number;
});
console.log(squares.toString());

console.log('# 3');
const multBySeven = [];
for (let i = 1; i <= 10; i++) {
    multBySeven.push({x1:i, x2:7})
}
multBySeven.map(function (item) {
    console.log(`${item.x1} * ${item.x2} = ${item.x1 * item.x2}`);
})

console.log('# 4');
numbers = [];
for (let i = 1; i <= 15; i++) {
    numbers.push(i);
}
const sum = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);
console.log(`the sum of numbers from 1 to 15 is equal to = ${sum}`);

console.log('# 5');
numbers = [];
for (let i = 15; i <= 35; i++) {
    numbers.push(i)
}
const product = numbers.reduce(function (product, number) {
    return product * number;
}, 1)
console.log(`the product of all integers from 15 to 35 is equal to = ${product}`);

console.log('# 6');
numbers = [];
for (let i = 1; i <= 500; i++) {
    numbers.push(i);
}
const arithmetic = (numbers.reduce(function (arithmetic, number) {
    return arithmetic + number;
}, 0) / numbers.length);
console.log(`the arithmetic mean of numbers from 1 to 500 is equal to = ${arithmetic}`);

console.log('# 7');
numbers = [];
for (let i = 30; i <= 80; i++) {
    numbers.push(i);
}
const evenSum = numbers.reduce(function (evenSum, number) {
    if (number % 2 === 0) return evenSum;
    return evenSum + number;
}, 0);
console.log(`sum of all even numbers from 30 to 80 is equal to = ${evenSum}`);

console.log('# 8');
numbers = [];
for (let i = 100; i <= 200; i++) {
    numbers.push(i);
}
const multiplesOfThree = numbers.filter(function (number) {
    return number % 3 === 0;
});
console.log(multiplesOfThree.toString());

let naturalNumber = 42;
console.log(`naturalNumber = ${naturalNumber}`)

console.log('# 9');
numbers = [];
for (let i = 1; i <= naturalNumber; i++) {
    numbers.push(i);
}
const dividers = numbers.filter(function (number) {
    return naturalNumber % number === 0;
}, naturalNumber);
console.log(dividers);

console.log('# 10');
const evenDividers = dividers.filter(function (divider) {
    return divider % 2 ===0
});
console.log(evenDividers.toString());

console.log('# 11');
const sumEvenDividers = evenDividers.reduce(function (result, item) {
    return result + item;
}, 0)
console.log(sumEvenDividers);

console.log('# 12');
const multiTable = [];
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        multiTable.push({x1:i, x2:j})
    }
}
multiTable.map(function (item) {
    console.log(`${item.x1} * ${item.x2} = ${item.x1 * item.x2}`);
})

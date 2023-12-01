console.log('# 1');
let output = '20';
let number = 20;
for (let i = 0; i < 20; i++) {
    number += 0.5;
    output += `, ${number}`;
}
console.log(output);

console.log('# 2');
let dollar = 27;
for (let i = 1; i <= 10; i++) {
    console.log(`${i * 10} dollars cost ${dollar * i * 10} gryvna's`);
}

console.log('# 3');
let integerNumber = Number(prompt('Enter integer number'));
console.log(`integer number = ${integerNumber}`);
output = '';
for (let i = 1; i <= 100; i++) {
    if (i * i <= integerNumber) output += `${i}, `;
}
console.log(output);

console.log('# 4');
integerNumber = Number(prompt('Enter integer number'));
console.log(`integer number = ${integerNumber}`);
let counter = 0;
for (let i = 1; i <= integerNumber; i++) {
    if (integerNumber % i == 0) counter++;

}
if (counter <=2) {
    console.log(`integer number is simple number`);
} else {
    console.log(`integer number is not simple number`);
}

console.log('# 5');
integerNumber = Number(prompt('Enter integer number'));
console.log(`integer number = ${integerNumber}`);
let ratio = integerNumber;
while (ratio > 1) {
    ratio /= 3;
}
if (ratio === 1) {
    console.log(`integer number is 3 to the power of n`);
} else {
    console.log(`integer number is not 3 to the power of n`);
}

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(array);

console.log('#1');
let positiveCount = 0;
let positiveSum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        positiveCount++;
        positiveSum += array[i];
    }    
}
console.log(`positiveCount = ${positiveCount}`);
console.log(`positiveSum = ${positiveSum}`);

console.log('#2');
let minNumber = 0;
let minValue = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
        minNumber = i;
        minValue = array[i];
    }    
}
console.log(`minNumber = ${minNumber}`);
console.log(`minValue = ${minValue}`);

console.log('#3');
let maxNumber = 0;
let maxValue = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxNumber = i;
        maxValue = array[i];
    }    
}
console.log(`maxNumber = ${maxNumber}`);
console.log(`maxValue = ${maxValue}`);

console.log('#4');
let negativeCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeCount++;
    }    
}
console.log(`negativeCount = ${negativeCount}`);

console.log('#5');
let oddPositiveCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0 && array[i] % 2 !== 0) {
        oddPositiveCount++;
    }    
}
console.log(`oddPositiveCount = ${oddPositiveCount}`);

console.log('#6');
let evenPositiveCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0 && array[i] % 2 === 0) {
        evenPositiveCount++;
    }    
}
console.log(`evenPositiveCount = ${evenPositiveCount}`);

console.log('#7');
let evenPositiveSum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0 && array[i] % 2 === 0) {
        evenPositiveSum  += array[i];
    }    
}
console.log(`evenPositiveSum = ${evenPositiveSum}`);

console.log('#8');
let oddPositiveSum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0 && array[i] % 2 !== 0) {
        oddPositiveSum  += array[i];
    }    
}
console.log(`oddPositiveSum = ${oddPositiveSum}`);

console.log('#9');
let positiveProduct = 1;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        positiveProduct *= array[i];
    }    
}
console.log(`positiveProduct = ${positiveProduct}`);

console.log('#10');
for (let i = 0; i < array.length; i++) {
    if (i !== maxNumber) delete array[i];
}
console.log(array);

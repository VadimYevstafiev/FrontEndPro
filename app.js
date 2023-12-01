let length = Number(prompt('Enter length of your array'));
if (length < 4) length = Number(prompt('The array must have at least 4 elements'));
console.log(`Array's length = ${length}`);

const array = new Array(length);
console.log(array);
for (let i = 0; i < array.length; i++) {
    array[i]  = Number(prompt(`Enter ${i + 1} st element of your array`));
    console.log(array);
}

array.sort();
console.log(array);
array.splice(1, 3);
console.log(array);

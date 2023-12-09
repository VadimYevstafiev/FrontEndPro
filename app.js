function removeElement(array, item) {
    return array.filter(function (value) {
        return value !== item;
    });
}

const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = removeElement(array, 5);
console.log(array);
console.log(newArray);
// Результат: [1, 2, 3, 4, 6, 7]
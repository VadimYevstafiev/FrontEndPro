const num = Number(prompt('Enter number'));
const degree = Number(prompt('Enter degree'));

console.log(power(num, degree));

function power(num, degree) {
    if(degree == 0) return 1;
    if (degree === 1) return num;
    if (degree === -1) return 1 / num;

    if (degree > 0) {
        return num * power(num, --degree);
    } else {
        return power(num, ++degree) / num;
    }
}

const x1 = prompt('Write any number');
const x2 = prompt('Write any other number');
const x3 = prompt('Write any any other number');
alert(`${x1} ${x2} ${x3}`);

let x = 54678;
let str = '';
let rest;



while (x > 0) {
    rest = x % 10;
    str = rest + ' ' + str;
    x = (x - rest) / 10;
}

alert(str);

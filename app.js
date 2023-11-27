const operand = String(prompt('What do you want?'));
const x1 = Number(prompt('Enter first number'));
const x2 = Number(prompt('Enter second number'));

let y;

switch (operand) {
    case 'add':
        y = x1 + x2;
        alert(`${x1} + ${x2} = ${y}\n\n`);
        break;
    case 'sub':
        y = x1 - x2;
        alert(`${x1} - ${x2} = ${y}\n\n`);
        break;
    case 'mult':
        y = x1 * x2;
        alert(`${x1} * ${x2} = ${y}\n\n`);
        break;
    case 'div':
        y = x1 / x2;
        alert(`${x1} / ${x2} = ${y}\n\n`);
        break;
}

const buyData = {
    firstName: null,
    lastName: null,
    city: null,
    newPost: null,
    payment: null,
    quantity: null,
    comment: null
}

function isAlphabet(input) {
    return /^[A-Za-z]+$/.test(input);
}

function isComment(input) {
    return /^[A-Za-z|\s]+$/.test(input);
}

function isNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

function showConfirmedData() {
    console.log(buyData);
    const main = document.querySelector('main');
    const item = document.createElement('div');
    main.append(item);
    let paragraph;
    for (const key in buyData) {
        if (Object.hasOwnProperty.call(buyData, key)) {
            paragraph = document.createElement('p');
            paragraph.innerText = `${key}: ${buyData[key]}`;
            item.append(paragraph);
            buyData[key] = null;
        }
    }

}

function confirmButtonListener(event) {
    event.preventDefault();
    const parent = event.target.parentNode;

    let flag = true;

    let errorMessage;
    for (const key in buyData) {
        if (Object.hasOwnProperty.call(buyData, key) && key !== 'comment') {
            if (buyData[key] === null) {
                errorMessage = `The ${key} is requered`;
                if (key === 'payment') {
                    for (const item of parent.querySelectorAll('.radioLabel')) {
                        item.classList.add('error');
                    }
                } else {
                    parent[key].classList.add('error');
                }
                parent.querySelector(`#${key}`).innerText = errorMessage;
                flag = false;
            } else {
                if (key === 'payment') {
                    for (const item of parent.querySelectorAll('.radioLabel')) {
                        item.classList.remove('error');
                    }
                } else {
                    parent[key].classList.remove('error');
                }
                parent.querySelector(`#${key}`).innerText = '';
            }
        }
    }
    if (flag) {
        confirmFormHide();
        showConfirmedData();
    }
}

function confirmFormListener(event) {
    let name = event.target.name;
    let value = event.target.value;
    let isCorrect;
    let errorMessage;

    if (name === 'city') {
        buyData[name] = value;
        event.target.classList.remove('error');
        this.querySelector(`#${name}`).innerText = '';   
        return;
    }
    if (name === 'payment') {
        buyData[name] = value;
        this.querySelector(`#${name}`).innerText = '';   
        for (const item of this.querySelectorAll('.radioLabel')) {
            item.classList.remove('error');
        }
        return;
    }

    if (name === 'newPost' || name === 'quantity') {
        isCorrect = isNumber(value);
        errorMessage = `The ${name} may be number`;
    } else if (name === 'comment') {
        isCorrect = isComment(value);
        errorMessage = `The ${name} may be text`;
    } else {
        isCorrect = isAlphabet(value);
        errorMessage = `The ${name} may be string`;
    }

    if (isCorrect) {
        buyData[name] = value;
        event.target.classList.remove('error');
        this.querySelector(`#${name}`).innerText = '';        
    }  else {
        event.target.classList.add('error');
        this.querySelector(`#${name}`).innerText = errorMessage;
    }
}

export function confirmFormShow() {
    document.querySelector('.confirm__bg').hidden = false;

    const form = document.querySelector('.confirm');
    form.addEventListener('input', confirmFormListener);

    const button = form.querySelector('button');
    button.addEventListener('click', confirmButtonListener);
}

export function confirmFormHide() {
    document.querySelector('.confirm__bg').hidden = true;

    const form = document.querySelector('.confirm');
    form.removeEventListener('input', confirmFormListener);

    const button = form.querySelector('button');
    button.removeEventListener('click', confirmButtonListener);
}

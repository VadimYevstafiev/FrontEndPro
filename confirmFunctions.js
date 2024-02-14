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

function confirmButtonListener(event) {
    event.preventDefault();
    const button = event.target.closest('button');

    if(!button) return;

    if (!this.contains(button)) return;

    let errorMessage;
    for (const key in buyData) {
        if (Object.hasOwnProperty.call(buyData, key) && key !== 'comment') {
            if (buyData[key] === null) {
                console.log(this.querySelector(`#${key}`))
                errorMessage = `The ${key} is requered`;
                if (key === 'payment') {
                    console.log(document.querySelectorAll('.radioLabel'))
                    // for (const item of document.querySelectorAll('.radioLabel')) {
                    //     item.classList.add('error');
                    //   }
                } else {
                    this[key].classList.add('error');
                }
                this.querySelector(`#${key}`).innerText = errorMessage;
            } else {
                if (key === 'payment') {
                    for (const item of this[key]) {
                        item.classList.remove('error');
                      }
                } else {
                    this[key].classList.remove('error');
                }
                this.querySelector(`#${key}`).innerText = '';
            }
        }
    }


    console.log(buyData);
}

function radioListener(event) {
    console.log('OK!!!!!!!!!!')
}

function confirmFormListener(event) {
    let name = event.target.name;
    let value = event.target.value;
    let isCorrect;
    let errorMessage;

    console.log(event);
    console.log(value)

    if (name === 'newPost' || name === 'quantity') {
        isCorrect = isNumber(value);
        errorMessage = `The ${name} may be number`;
    } else if (name === 'city' || name === 'payment') {
        isCorrect = true;
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
    const confirmForm = document.querySelector('.confirm');
    confirmForm.addEventListener('input', confirmFormListener);
    confirmForm.addEventListener('click', confirmButtonListener);
    confirmForm.querySelectorAll('.radio').forEach(element => {
        element.addEventListener('click', radioListener);
    })
    console.log(confirmForm.querySelectorAll('.radio'))
}

export function confirmFormHide() {
    document.querySelector('.confirm__bg').hidden = true;
    const confirmForm = document.querySelector('.confirm');
    confirmForm.removeEventListener('input', confirmFormListener);
    confirmForm.removeEventListener('click', confirmButtonListener);
}

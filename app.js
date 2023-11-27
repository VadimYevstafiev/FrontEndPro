const year = prompt('Enter year of your birth');
const city = prompt('What city do you live in?');
const sport = prompt('What is your favorite sport?');

let ageMessage = year ? `Your age is ${2023 - year}` : 'It is a pity that you did not want to enter year of your birth';
let cityMessage;
let sportMessage;

switch (city) {
    case 'Kiev':
        cityMessage = 'You live in capital of Ukraine';
        break;
    case 'London':
        cityMessage = 'You live in capital of Grait Britain';
        break;
    case 'Washington':
        cityMessage = 'You live in capital of USA';
        break;
    case null:
        cityMessage = 'It is a pity that you did not want to enter your city';
        break;
    default:
        cityMessage = `You live in ${city}`;
        break;
}

switch (sport) {
    case 'box':
        sportMessage = 'Cool! Do you want to become like Mohammad Ali?';       
        break;
    case 'football':
        sportMessage = 'Cool! Do you want to become like Pele?';       
        break;
    case 'Formula 1':
        sportMessage = 'Cool! Do you want to become Schumacher?';       
        break;
    case null:
        sportMessage = 'It is a pity that you did not want to enter your sport';
        break;
    default:
        sportMessage = ``;
        break;
}

alert(`* ${ageMessage} \n\n * ${cityMessage} \n\n * ${sportMessage} \n\n`);

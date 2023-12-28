class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Appartment {
    people = [];

    addHuman(human) {
        if (human instanceof Human) {
            this.people.push(human);
        } else {
            console.log('It is not Human!');
        }
    }
}

class Building {
    appartments = [];

    constructor(maxAppart) {
        this.maxAppart = maxAppart;
    }

    addAppartment(appartment) {
        if (this.appartments.length >= this.maxAppart) {
            console.log('Building overflow!');
            return;
        }
        if (appartment instanceof Appartment) {
            this.appartments.push(appartment);
        } else {
            console.log('It is not Appartment!');
        }
    }
}

let Masha = new Human('Masha', 'female');
let Dasha = new Human('Dasha', 'female');
let Petya = new Human('Petya', 'male');
let Kolya = new Human('Kolya', 'male');
let Archibald = new Human ('Archibald', undefined);

let numberOne = new Appartment();
numberOne.addHuman(Masha);
numberOne.addHuman(Petya);

let numberTwo = new Appartment();
numberTwo.addHuman(Dasha);

let numberThree = new Appartment();
numberThree.addHuman(Kolya);

let numberFour = new Appartment();
numberFour.addHuman({name: 'Gogi'});

let numberFive = new Appartment();
numberFive.addHuman(Archibald);

let house = new Building(4);
house.addAppartment(numberOne);
house.addAppartment(numberTwo);
house.addAppartment(numberThree);
house.addAppartment(numberFour);
house.addAppartment(numberFive);

console.log(house);

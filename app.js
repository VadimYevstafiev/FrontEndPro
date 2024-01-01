class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(`Himan. Name: ${this.name}. Age: ${this.age}.`);
    }
}

class Car {
    constructor(mark, model, manufactured, numberplate) {
        this.mark = mark;
        this.model = model;
        this.manufactured = manufactured;
        this.numberplate = numberplate;
    }

    setOwner(owner) {
        if (owner instanceof Human && owner.age > 18) {
            this.owner = owner;
        } else {
            console.log('It is bad owner');
        }
    }

    show() {
        console.log(`Car. Mark: ${this.mark}. Model: ${this.model}. Manufactured at: ${this.manufactured}. Numberplate: ${this.numberplate}.`);
        console.log(`Owner:`);
        if (typeof this.owner  === 'undefined') {
            console.log(`nobody`);
        } else {
            this.owner.show();           
        }
    }
}

let Masha = new Human('Masha', 18);
let Dasha = new Human('Dasha', 22);
let Petya = new Human('Petya', 44);
let Kolya = new Human('Kolya', 35);

let Mersedes = new Car('Mersedes', 'S600', 2014, 'KH 34 56');
let BMW = new Car('BMW', '340', 2010, 'KN 45 67');
let Toyota = new Car('Toyota', 'Camry', 2020, 'KN 67 39');
let ZAZ = new Car('ZAZ', '369', 1968, 'KN 23 56');

Mersedes.setOwner(Masha);
BMW.setOwner(Dasha);
Toyota.setOwner(Petya);
ZAZ.setOwner(Kolya);

Mersedes.show();
BMW.show();
Toyota.show();
ZAZ.show();

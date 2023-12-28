class Hamburger {
    static SIZE_BIG = Math.random();
    static SIZE_SMALL = Math.random();

    static STUFFING_CHEESE = Math.random();
    static STUFFING_SALAD = Math.random();
    static STUFFING_POTATO = Math.random();

    static TOPPING_SAUCE = Math.random();
    static TOPPING_MAYO = Math.random();

    constructor(size, stuffing) {
        this.price = [];
        this.calories = [];       

        switch (size) {
            case Hamburger.SIZE_BIG:
                this.price.push(100);
                this.calories.push(40);
                break;
            case Hamburger.SIZE_SMALL:
                this.price.push(50);
                this.calories.push(20);
                break;        
            default:
                console.log('Uncorrect size');
                return;
        }

        switch (stuffing) {
            case Hamburger.STUFFING_CHEESE:
                this.price.push(10);
                this.calories.push(20);
                break;
            case Hamburger.STUFFING_SALAD:
                this.price.push(20);
                this.calories.push(5);
                break;
            case Hamburger.STUFFING_POTATO:
                this.price.push(15);
                this.calories.push(10);
                break;        
            default:
                console.log('Uncorrect stuffing');
                return;
        }
    }

    addTopping($topping) {
        switch ($topping) {
            case Hamburger.TOPPING_SAUCE:
                this.price.push(15);
                this.calories.push(0);
                break;
            case Hamburger.TOPPING_MAYO:
                this.price.push(20);
                this.calories.push(5);
                break;        
            default:
                console.log('Uncorrect topping');
                return;
        }
    }

    calculate() {
        return this.calories.reduce((total, item) => total + item);
    }

    calculatePrice() {
        return this.price.reduce((total, item) => total + item);
    }
}

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate ());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());

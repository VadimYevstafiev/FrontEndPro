class SuperMath {
    check(obj) {
        if(!obj.hasOwnProperty("X") || !obj.hasOwnProperty("Y") || !obj.hasOwnProperty("znak")) {
            console.log('Uncorrect argument');
        }

        this.x = obj.X;
        this.y = obj.Y;
        this.znak = obj.znak;

        if (this.y === 0 && (this.znak === '/' || this.znak === '%')) {
            console.log('Division by zero!');
            return;
        }

        if (!confirm(`Do you want ${this.x} ${this.znak} ${this.y}`)) {
            this.input();
            return;
        }

        let result;
        switch (this.znak) {
            case '+':
                result = this.x + this.y;
                break;
            case '-':
                result = this.x - this.y;
                break;
            case '/':
                result = this.x / this.y;
                break;               
            case '*':
                result = this.x * this.y;
                break;
            case '%':
                result = this.x % this.y;
                break;
        }
        console.log(result);
    }

    input() {
        const obj = new Object();
        obj.X = Number(prompt('Enter X'));
        obj.Y = Number(prompt('Enter Y'));
        obj.znak = prompt('Enter znak');
        this.check(obj);
    }
}

obj = {X:12, Y:3, znak: "/"};
p = new SuperMath();
p.check(obj)


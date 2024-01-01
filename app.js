class Student {
    constructor(name, surname, birthyear) {
        this.name = name;
        this.surname = surname;
        this.birthyear = birthyear;
    
        this.count = 25;
        this.attendance = new Array(this.count);
        this.grades = new Array();
    }

    age() {
        return `${this.surname}'s age is ${(new Date()).getFullYear() - this.birthyear} year`;
    }

    present() {
        this.fillAttendance(true);
    }

    absent() {
        this.fillAttendance(false);
    }
    
    grade(gradeValue) {
        if ((typeof gradeValue) === 'number' && gradeValue > 0 && gradeValue <= 100) {
            this.grades.push(gradeValue);
        }
    }

    avarageGrade() {
        const sum = this.grades.reduce(function (sum, item) {
            return sum + item;
        }, 0);
        return Math.round((sum / this.grades.length) * 100 ) / 100;
    }

    avarageAttendance() {
        const sum = this.attendance.reduce(function (sum, item) {
            return (item) ? ++sum : sum;
        }, 0);
        console.log(sum);
        return Math.round((sum / this.attendance.length) * 100 ) / 100;
    } 

    summary() {
        switch (true) {
            case (this.avarageGrade() > 90 && this.avarageAttendance() > 0.9):
                return 'Cool!!!';
            case (this.avarageGrade() > 90 || this.avarageAttendance() > 0.9):
                return 'Good, but it can be better';
            default:
                return 'Miserable';

        }
    }

    fillAttendance(value) {
        let i = 0;
        let condition = true;
        do {
            if (String(this.attendance[i]) === 'undefined') {
                this.attendance[i] = value;
                condition = false;
            }
            i++;
        } while(condition && i < this.count);

        if (condition) console.log('Attendance is overflow');

    }
}

const Ivanov = new Student('Ivan', 'Ivanov', 2000);
console.log(Ivanov.age());
Ivanov.absent();
Ivanov.present();
Ivanov.present();
Ivanov.attendance = new Array(30);
for (let i =0; i <25; i++) {
    Ivanov.present();
}
Ivanov.grade(80);
Ivanov.grade(95);
Ivanov.grade(96);
Ivanov.grade(98);
console.log(Ivanov.avarageGrade());
console.log(Ivanov.avarageAttendance());
console.log(Ivanov.summary());

const Petrov = new Student('Ivan', 'Petrov', 2004);
console.log(Petrov.age());
Petrov.absent();
Petrov.absent();
Petrov.absent();
for (let i =0; i <22; i++) {
    Petrov.present();
}
Petrov.grade(80);
Petrov.grade(75);
Petrov.grade(96);
Petrov.grade(98);
console.log(Petrov.avarageGrade());
console.log(Petrov.avarageAttendance());
console.log(Petrov.summary());

const Sidorov = new Student('Ivan', 'Sidorov', 2002);
console.log(Sidorov.age());
Sidorov.absent();
Sidorov.absent();

for (let i =0; i <23; i++) {
    Sidorov.present();
}
Sidorov.grade(80);
Sidorov.grade(75);
Sidorov.grade(96);
Sidorov.grade(98);
console.log(Sidorov.avarageGrade());
console.log(Sidorov.avarageAttendance());
console.log(Sidorov.summary());

// function Student(name, surname, birthyear) {
    //     this.name = name;
    //     this.surname = surname;
    //     this.birthyear = birthyear;
    
    //     this.count = 25;
    //     this.attendance = new Array(this.count);
    //     this.grades = new Array();
    
    //     Object.defineProperty(this, 'attendance', {configurable: false});
    //     Object.defineProperty(this, 'attendance', {writable: false});
    
    //     this.age = function() {
    //         return `${this.surname}'s age is ${(new Date()).getFullYear() - this.birthyear} year`;
    //     }
    
    //     this.present = function() {
    //         this.fillAttendance(true);
    //     }
    
    //     this.absent = function() {
    //         this.fillAttendance(false);
    //     }
        
    //     this.grade = function(gradeValue) {
    //         if ((typeof gradeValue) === 'number' && gradeValue > 0 && gradeValue <= 100) {
    //             this.grades.push(gradeValue);
    //         }
    //     }
    
    //     this.avarageGrade = function() {
    //         const sum = this.grades.reduce(function (sum, item) {
    //             return sum + item;
    //         }, 0);
    //         return Math.round((sum / this.grades.length) * 100 ) / 100;
    //     }
    
    //     this.avarageAttendance = function() {
    //         const sum = this.attendance.reduce(function (sum, item) {
    //             return (item) ? ++sum : sum;
    //         }, 0);
    //         console.log(sum);
    //         return Math.round((sum / this.attendance.length) * 100 ) / 100;
    //     } 
    
    //     this.summary = function () {
    //         switch (true) {
    //             case (this.avarageGrade() > 90 && this.avarageAttendance() > 0.9):
    //                 return 'Cool!!!';
    //             case (this.avarageGrade() > 90 || this.avarageAttendance() > 0.9):
    //                 return 'Good, but it can be better';
    //             default:
    //                 return 'Miserable';
    
    //         }
    //     }
    
    //     this.fillAttendance = function(value) {
    //         let i = 0;
    //         let condition = true;
    //         do {
    //             if (String(this.attendance[i]) === 'undefined') {
    //                 this.attendance[i] = value;
    //                 condition = false;
    //             }
    //             i++;
    //         } while(condition && i < this.count);
    
    //         if (condition) console.log('Attendance is overflow');
    
    //     }
    // }
   

import { Person } from "./person.js";

class Worker extends Person {

    #rate = 1000;
    #days = 0;
    #birthdayDate = "01.14.1990"

    constructor(firstName, lastName, position) {
        super(firstName, lastName);
            this.firstName = firstName;
            this.lastName = lastName;
            this.position = position;

    }

    get rate() {
        return this.#rate;
    }

    set rate(rate) {
        if (this.#rate >= 1000) {
            return this.#rate = rate;
        } else {
            try {
            throw new Error('error');
            } catch (e) {
                console.log(e.name + ' ' + this.#rate);
            }
        }

    }



    addDays(days) {
        if (days > 0 && days <= this.currentDaysInMonth()) {
            return  this.#days = days;
        }

        return false
    }

    getSalary() {
       let personBirthdayMonth = new Date(this.#birthdayDate)
        let todayDate = new Date()
       let currentSalary = this.currentDaysInMonth() * this.#rate
        if (personBirthdayMonth === todayDate) {
          return currentSalary = currentSalary + currentSalary * (10 / 100);
        }

        return `Зарплата за месяц : ${currentSalary}`

    }


    currentDaysInMonth() {
        Date.prototype.daysInMonth = function() {
            return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
        };
        let currentMonthDays = new Date().daysInMonth();
        return currentMonthDays
    }

    static whoWorkedMore(...objects) {

    }

    static whoIsYounger(...workers) {

    }


}


const worker = new Worker();

console.log(worker.addDays(22))
console.log(worker)

export { Worker };



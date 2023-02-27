import { Person } from "./person.js";

class Worker extends Person {

    #rate = 1000;
    #days = 0;

    constructor(firstName, lastName, birthday, position) {
        super();
            this.firstName = firstName;
            this.lastName = lastName;
            this.position = position;
            this.birthday = birthday;

    }

    get daysWorker() {
        return this.#days;
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
        } else {
            console.error('Incorrect date')
        }

        return false
    }

    getSalary() {
        let personBirthdayMonth = new Date(this.birthday);
        let todayDate = new Date();
        let currentSalary = this.currentDaysInMonth() * this.#rate;
        if (personBirthdayMonth === todayDate) {
            currentSalary = currentSalary + currentSalary * (10 / 100);

            return currentSalary
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


    static whoWorkedMore(...workers) {
        const maxDays = Math.max(...workers.map(w => w.daysWorker));
        workers
            .filter((w) => w.daysWorker === maxDays)
            .forEach((w) => console.log(`Больше всех отработал ${w.getFullName()}. Количество рабочих дней ${maxDays}`));


       //  let maxNum = 0;
       //
       //  workers.forEach(day => {
       //      if (maxNum < day.days) {
       //          maxNum = day.days
       //      }
       //  })
       //
       // let maxWorkingDays = workers.filter(worker => {
       //      if (worker.days === maxNum){
       //         return console.log(`Больше всех отработал ${worker.getFullName()}. Количество рабочих дней ${maxNum}`)
       //      }
       //
       //  })
    }

    static whoIsYounger(...workers) {
        let currentYear = new Date().getFullYear()
        // const [, , year] = workers[0].birthday.split('-');
        // const workerAge = +currentYear - +year;
        // console.log(+workerAge)
        let minNum = 0;

        const minWorkersAge = Math.min(...workers.map(w => {
            let [, , year] = w.birthday.split('-');
            const workersAge = +currentYear - +year;
            let numOp = Math.min(workersAge)

        console.log(numOp)
        }));
    }


}


const worker = new Worker();

// console.log(worker.addDays(22))
// console.log(worker)

export { Worker };



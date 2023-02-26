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
        let personBirthdayMonth = new Date(this.birthday)
        let todayDate = new Date()
        let currentSalary = this.currentDaysInMonth() * this.#rate
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


    //Егор, с изменениями данных вроде отрабатывает. Визуально можно было бы конечно по красивее это вывести,
    // ну по крайней мере я бы переделал это не выходя из тела foreach(если я прав) =) Но Егор в любом случае знает более изящный вариант!)
    static whoWorkedMore(...workers) {
        let maxNum = 0;

        workers.forEach(day => {
            if (maxNum < day.days) {
                maxNum = day.days
            }
        })

       let maxWorkingDays = workers.filter(worker => {
            if (worker.days === maxNum){
               return console.log(`Больше всех отработал ${worker.getFullName()}. Количество рабочих дней ${maxNum}`)
            }

        })
    }

    static whoIsYounger(...workers) {
        let currentYear = new Date()
        // let workerYear = new Date(this.birthday).getFullYear();
        let maxNum = 0;
        console.log(currentYear)
        workers.forEach(birth => {
                let workerDate = birth.birthday.split('/');
                let currentWorkerYear = new Date(workerDate[1] + '/' +workerDate[1] + '/' +workerDate[2])
            console.log(workerDate)
            if (birth.birthday) {
            }
        })


    }


}


const worker = new Worker();

// console.log(worker.addDays(22))
// console.log(worker)

export { Worker };



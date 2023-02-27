 class Person {

    #birthdayDate;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    get birthday() {
        return this.#birthdayDate;
    }

    set birthday(data) {
        this.#birthdayDate = data;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }


    getAge() {
        const currentYear = new Date().getFullYear();
        const [, , workerDate] = this.birthday.split('-');
        const currentWorkerDate = currentYear - workerDate;

        let count = currentWorkerDate % 100;
            if (count >= 5 && count <= 20) return `${+currentWorkerDate} лет`;
                else {
                    count = count % 10;
                    if (count === 1) return `${+currentWorkerDate} год`;
                    else if (count >= 2 && count <= 4) return `${+currentWorkerDate} года`;
                    else return `${+currentWorkerDate} лет`;
            }
    }

    showData() {
        console.log(`${this.firstName} ${this.lastName} ${this.birthday} ${this.getAge()}`)
    }


}


 export { Person } ;




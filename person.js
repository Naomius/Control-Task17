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


    //Егор, у меня до переделки геттера(в котором была конструкция выводящая одной цифрой возраст)
     //теперь не знаю куда её будет точнее применить. Или правильнее будет сам getAge переработать, в switch конструкцию другую.

    getAge() {
        let count = this.birthday % 100;
            if (count >= 5 && count <= 20) return 'лет';
                else {
                    count = count % 10;
                    if (count === 1) return 'год';
                    else if (count >= 2 && count <= 4) return 'года';
                    else return 'лет';
            }
    }

    showData() {
        console.log(`${this.firstName} ${this.lastName} ${this.birthday} ${this.getAge()}`)
    }


}

const person1 = new Person('Vasya', 'pupkin', '01.14.2000');
 // person1.showData()

 export { Person } ;




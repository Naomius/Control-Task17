 class Person {

    #birthdayDate = '01.14.1990';

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    get birthday() {
        let todayYear = new Date().getFullYear();
        let personBirthday = new Date(this.#birthdayDate).getFullYear();
        let result = todayYear - personBirthday;

        return +result;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

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


}

    let person = new Person();
 // console.log(person.birthday)

 export { Person } ;




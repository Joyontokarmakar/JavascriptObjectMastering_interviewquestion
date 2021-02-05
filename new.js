//same type multiple object template


class person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person('Hero', 'Balam', 25000);
console.log(heroPerson);

const friendlyPerson = new person('Kalam', 'Balam', 30000);
console.log(friendlyPerson);


function personOne(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary; 
}

const oldPerson = new personOne('Grand', 'Papa', 40000);
console.log(oldPerson);
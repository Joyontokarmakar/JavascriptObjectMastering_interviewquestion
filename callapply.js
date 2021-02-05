const normalPerson = {
    firstName: 'Rahim',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary-amount;

        return this.salary;
    }
}

// console.log(normalPerson.firstName);
// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);



const heroPerson = {
    firstName: 'Hero',
    lastName: 'xyz',
    salary: 20000,
    
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'xyz',
    salary: 30000,

}
// normalPerson.chargeBill();
const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(2000);
console.log("Her Person Salary     : "+ heroPerson.salary);

const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
friendlyBillCharge(2500);
console.log("Friendly Person salary: "+ friendlyPerson.salary);

console.log("Normal Person Salary  : "+ normalPerson.salary);
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;

        return this.salary;
    }
}

// console.log(normalPerson.firstName);
// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);


//============================================= Applying bind

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

// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// console.log("Her Person Salary     : "+ heroPerson.salary);

// const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyBillCharge(2500);
// console.log("Friendly Person salary: "+ friendlyPerson.salary);

// console.log("Normal Person Salary  : "+ normalPerson.salary);


//================================= applying call

// normalPerson.chargeBill.call(heroPerson, 500,  100,10);
// normalPerson.chargeBill.call(heroPerson, 2000, 300, 30);
// console.log("Hero Person Salary     : "+ heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 1000, 500, 200);
// console.log("Friendly Person Salary : "+ friendlyPerson.salary);

// console.log("Normal Person Salary   : "+ normalPerson.salary);


//================================= applying apply
normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [1000, 50, 10]);
console.log("Hero Person Salary     : "+ heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [150, 15, 10]);
console.log("Friendly Person Salary : "+ friendlyPerson.salary);

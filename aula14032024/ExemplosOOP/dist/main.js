"use strict";
// CLASSE E OBJETO
class Employee {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    // MÉTODO
    toString() {
        return `Name: ${this.fullName}`;
    }
}
let emp = new Employee("General", "T", "Employee");
console.log(emp.toString());
// HERANÇA
class Teacher extends Employee {
    constructor(firstName, middleInitial, lastName, subject, income) {
        super(firstName, middleInitial, lastName);
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.subject = subject;
        this.income = income;
        this._income = income;
        this._subject = subject;
    }
    get income() {
        return this.income;
    }
    toString() {
        return `Name: ${this.fullName}, Income: $${this._income.toFixed(2)}, Subject: ${this._subject}`;
    }
}
let teach = new Teacher("General", "T", "Teacher", "Math", 2500.00);
console.log(teach.toString());

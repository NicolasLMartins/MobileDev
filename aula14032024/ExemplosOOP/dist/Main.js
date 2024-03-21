"use strict";
// CLASSE
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
const employee = new Employee("General", "T", "Employee"); // OBJETO
console.log(employee.toString());
// HERANÇA, CLASSE
class Teacher extends Employee {
    constructor(firstName, middleInitial, lastName, subject, // ENCAPSULAMENTO, ATRIBUTO
    _income // ENCAPSULAMENTO, ATRIBUTO
    ) {
        super(firstName, middleInitial, lastName); // HERANÇA
        this.subject = subject;
        this._income = _income;
    }
    get income() {
        return this._income;
    }
    set income(value) {
        this._income = value;
    }
    // MÉTODO
    toString() {
        return `Name: ${this.fullName}, Income: $${this._income.toFixed(2)}, Subject: ${this.subject}`;
    }
}
const teacher = new Teacher("General", "T", "Teacher", "Math", 2500.00); // OBJETO
console.log(`Antes: ${teacher.toString()}`);
teacher.income = 3000.00; // ENCAPSULAMENTO
console.log(`Depois: ${teacher.toString()}`);
// ABSTRAÇÃO, CLASSE
class Forma {
}
// HERANÇA, CLASSE
class Retangulo extends Forma {
    constructor(altura, largura) {
        super();
        this.altura = altura;
        this.largura = largura;
    }
    // MÉTODO
    calcularArea() {
        return this.altura * this.largura;
    }
}
const formaAbstrata = new Retangulo(5, 2); // OBJETO
console.log(formaAbstrata.calcularArea());

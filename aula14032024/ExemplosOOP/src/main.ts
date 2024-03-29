// CLASSE
class Employee {
    // ATRIBUTO
    protected fullName: string;

    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    // MÉTODO
    public toString(): string {
        return `Name: ${this.fullName}`;
    }
}

const employee = new Employee("General", "T", "Employee"); // OBJETO
console.log(employee.toString());

// HERANÇA, CLASSE
class Teacher extends Employee {
    constructor(
        firstName: string,
        middleInitial: string,
        lastName: string,
        private subject: string, // ENCAPSULAMENTO, ATRIBUTO
        private _income: number // ENCAPSULAMENTO, ATRIBUTO
    ) {
        super(firstName, middleInitial, lastName); // HERANÇA
    }

    public get income(): number { // ENCAPSULAMENTO
        return this._income;
    }

    public set income(value: number) { // ENCAPSULAMENTO
        this._income = value;
    }

    // MÉTODO
    toString(): string { // POLIMORFISMO
        return `Name: ${this.fullName}, Income: $${this._income.toFixed(2)}, Subject: ${this.subject}`;
    }
}

const teacher = new Teacher("General", "T", "Teacher", "Math", 2500.00) // OBJETO
console.log(`Antes: ${teacher.toString()}`);
teacher.income = 3000.00; // ENCAPSULAMENTO
console.log(`Depois: ${teacher.toString()}`);


// ABSTRAÇÃO, CLASSE
abstract class Forma {
    abstract calcularArea(): number;
}

// HERANÇA, CLASSE
class Retangulo extends Forma {
    constructor(private altura: number, private largura: number) {
        super();
    }

    // MÉTODO
    calcularArea(): number {
        return this.altura * this.largura;
    }
}

const formaAbstrata = new Retangulo(5, 2); // OBJETO
console.log(formaAbstrata.calcularArea());
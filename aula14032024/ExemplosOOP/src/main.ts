// CLASSE E OBJETO
class Employee {
    // ATRIBUTOS
    fullName: String;

    constructor(
        public firstName: String,
        public middleInitial: String,
        public lastName: String
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    // MÉTODO
    public toString(): String {
        return `Name: ${this.fullName}`;
    }
}

let emp = new Employee("General", "T", "Employee");
console.log(emp.toString());

// HERANÇA
class Teacher extends Employee {
    private _income: Number;
    private _subject: String;
    
    constructor(
        public firstName: String,
        public middleInitial: String,
        public lastName: String,
        public subject: String,
        public income: Number
    ) {
        super(firstName, middleInitial, lastName)
        this._income = income;
        this._subject = subject;
    }

    public get income() : Number {
        return this.income;
    }

    override toString(): String {
        return `Name: ${this.fullName}, Income: $${this._income.toFixed(2)}, Subject: ${this._subject}`;
    }
}

let teach = new Teacher("General", "T", "Teacher", "Math", 2500.00)
console.log(teach.toString());
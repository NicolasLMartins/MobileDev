"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    toString() {
        return this.fullName;
    }
}
function greeter(student) {
    return "Hello, " + student;
}
let user = new Student("Jane", "M.", "User");
console.log(greeter(user));

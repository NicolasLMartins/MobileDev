class Student {
    fullName: string;

    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    public toString() {
        return this.fullName;
    }
}

function htmlGreeter(student: Student) {
    return "Hello, " + student;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = htmlGreeter(user);
// console.log(greeter(user));
interface Person {
    firstName: string;
    lastName: string;
}

function interfaceGreeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let interfaceUser = { firstName: "Jane", lastName: "User" };

// document.body.textContent = interfaceGreeter(interfaceUser);
console.log(interfaceGreeter(interfaceUser));
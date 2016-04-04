interface Person {
    firstName: string;
    lastName: string;
}

export default function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
// Interface Declaration
interface Person {
    name: string;
    age: number;
    greet(): void;
}

// Implementing an Interface
class Employee implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

let emp = new Employee("Alice", 30);
emp.greet();

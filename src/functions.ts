
// Function Declaration
function add(a: number, b: number): number {
    return a + b;
}

let result: number = add(5, 3);
console.log("Addition Result:", result);

// Optional Parameters
function greet(name: string, message?: string): void {
    if (message) {
        console.log(`Hello, ${name}! ${message}`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greet("Alice");
greet("Bob", "How are you?");

// Create two objects with properties name and age
const person1 = {
    name: 'Alice',
    age: 25
};

const person2 = {
    name: 'Bob',
    age: 30
};

// Create the introduce function
function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Use the call method to make each person introduce themselves
introduce.call(person1); // Output: Hello, I'm Alice, and I'm 25 years old.
introduce.call(person2); // Output: Hello, I'm Bob, and I'm 30 years old.

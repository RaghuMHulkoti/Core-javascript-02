// Function to display information
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}

// Using call to invoke displayInfo with specific arguments
displayInfo.call(null, 'Alice', 'Developer');

// Using apply to invoke displayInfo with arguments passed as an array
displayInfo.apply(null, ['Bob', 'Designer']);

// Function to log a greeting
function greet() {
    console.log(`Hello, ${this.name}!`);
}

// Creating a new function boundGreet with a specific context
const context = { name: 'Charlie' };
const boundGreet = greet.bind(context);

// Logging the greeting
boundGreet();

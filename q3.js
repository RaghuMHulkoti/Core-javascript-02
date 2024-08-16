// Create a Map to store contact information
const contacts = new Map();

// Function to add a contact
function addContact(name, age, email, location) {
    contacts.set(name, { age, email, location });
}

// Function to retrieve contact details by name
function getContactByName(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return `Contact with name ${name} not found.`;
    }
}

// Adding some contacts
addContact('Alice', 25, 'alice@example.com', 'New York');
addContact('Bob', 30, 'bob@example.com', 'Los Angeles');
addContact('Charlie', 28, 'charlie@example.com', 'Chicago');

// Retrieving contact details
console.log(getContactByName('Alice')); // { age: 25, email: 'alice@example.com', location: 'New York' }
console.log(getContactByName('David')); // Contact with name David not found.

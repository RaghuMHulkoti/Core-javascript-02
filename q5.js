// Create a Set to store unique numbers
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 2, 3, 4]);

// Create a Map to associate each number with its square
const numberSquares = new Map();

// Populate the Map with numbers and their squares
uniqueNumbers.forEach(number => {
    numberSquares.set(number, number * number);
});

// Print the unique numbers
console.log('Unique numbers:', [...uniqueNumbers]);

// Print the corresponding squares
console.log('Number squares:');
numberSquares.forEach((square, number) => {
    console.log(`${number} => ${square}`);
});

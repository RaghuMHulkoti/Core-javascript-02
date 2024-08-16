// Creating the calculator object with add, subtract, and multiply methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    calculate: function(operation, a, b) {
        return thisoperation;
    }
};

// Using call to perform an addition operation
const additionResult = calculator.calculate.call(calculator, 'add', 5, 3);
console.log(`Addition Result: ${additionResult}`); // Output: Addition Result: 8

// Using apply to perform a multiplication operation with arguments as an array
const multiplicationResult = calculator.calculate.apply(calculator, ['multiply', 4, 2]);
console.log(`Multiplication Result: ${multiplicationResult}`); // Output: Multiplication Result: 8

// Creating the discountCalculator object with a discount percentage property and applyDiscount method
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function(price) {
        return price - (price * this.discountPercentage / 100);
    }
};

// Using bind to create a new function calculateDiscount bound to the discountCalculator object
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

// Logging the discounted price
const discountedPrice = calculateDiscount(100);
console.log(`Discounted Price: ${discountedPrice}`); // Output: Discounted Price: 90

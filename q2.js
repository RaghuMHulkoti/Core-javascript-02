// Corrected array of ages
const ages = [19, 18, 19, 14, 20, 15, 14, 14, 14, 14];

// Sorting the array
ages.sort((a, b) => a - b);

// Finding the minimum and maximum age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Finding the median age
const n = ages.length;
let medianAge;
if (n % 2 === 0) {
    medianAge = (ages[n / 2 - 1] + ages[n / 2]) / 2;
} else {
    medianAge = ages[Math.floor(n / 2)];
}

// Finding the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / n;

// Finding the range of the ages
const ageRange = maxAge - minAge;

// Comparing the value of (min - average) and (max - average) using abs() method
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

// Printing the results
console.log(`Sorted ages: ${ages}`);
console.log(`Minimum age: ${minAge}`);
console.log(`Maximum age: ${maxAge}`);
console.log(`Median age: ${medianAge}`);
console.log(`Average age: ${averageAge.toFixed(2)}`);
console.log(`Range of ages: ${ageRange}`);
console.log(`Absolute difference between min and average: ${minDiff.toFixed(2)}`);
console.log(`Absolute difference between max and average: ${maxDiff.toFixed(2)}`);

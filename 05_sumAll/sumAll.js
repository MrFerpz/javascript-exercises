const sumAll = function(num1, num2) {
    let count = 0;
    let list = [];
    for (let x = num1; x <= num2; x++) {
        list.push(x);
    }
    console.log(list);
    for (let y = 0; y < list.length; y++) {
        count += list[y];
    }
    console.log(count);
    return count
};

sumAll(10,40)

// Do not edit below this line
// module.exports = sumAll;

// Function must take 2 integers x
// Initialise a counter variable x
// Generate an array of all the numbers between them
// Iterate through array and add each number to the counter
// Return counter
const fibonacci = function(number) {
    let newNumber = Number(number);
    
    if (newNumber === 0) {
        return 0
    }

    if (newNumber < 0) {
        return "OOPS"
    }

    let newArray = [1, 1];
    for (let i = 2; i <= 100; i++) {
        newArray[i] = (newArray[i-2] + newArray[i-1])
    }
    return newArray[newNumber - 1];
};

// Do not edit below this line
module.exports = fibonacci;

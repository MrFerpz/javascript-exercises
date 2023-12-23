const repeatString = function(word, number) {
    let newString = "";
    
    if (number === 0) {
        return ""
    }
    
    if (number < 0) {
        return "ERROR";
    }

    let i = 1;
    while (i <= number) {
        newString += word;
        i++;
    }
    return newString;
};

console.log(repeatString("yeh", 2))

// Do not edit below this line
module.exports = repeatString;

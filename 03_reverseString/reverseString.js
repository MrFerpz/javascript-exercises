const reverseString = function(string) {
    let splitString = string.split('');
    let finalString = ""
    let i = 1;

    while (i <= splitString.length) {
        finalString += splitString[splitString.length - i];
        i++;
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;

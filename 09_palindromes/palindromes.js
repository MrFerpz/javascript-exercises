const palindromes = function (string) {
    let newString = string.replaceAll(/[.,?! ]/g, "");
    let upperCaseString = newString.toUpperCase();
    let array = Array.from(upperCaseString);
    console.log(array);

    for (let i = 0; i < array.length / 2; i++) {
        if (array[i] !== array[(array.length -1 -i)]) {
            return false;
        }
    }
    return true;
}
// Do not edit below this line
module.exports = palindromes;

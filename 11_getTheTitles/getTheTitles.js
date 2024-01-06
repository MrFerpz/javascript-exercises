const getTheTitles = function(bookslist) {
    newArray = [];
    for (let i = 0; i < bookslist.length; i++) {
        newArray.push(bookslist[i].title);
    }
    return newArray
}

// Do not edit below this line
module.exports = getTheTitles;

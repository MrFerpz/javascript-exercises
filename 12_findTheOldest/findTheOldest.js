const findTheOldest = function(people) {
    return people.reduce(function(oldest, currentPerson) {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currentPersonAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        return currentPersonAge > oldestAge ? currentPerson : oldest;
        })
};

function getAge(yearOfDeath, yearOfBirth) {
   if (!yearOfDeath) {
    yearOfDeath = new Date().getFullYear();
   }
    return (yearOfDeath - yearOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;

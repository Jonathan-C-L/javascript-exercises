const findTheOldest = function(array) {
    return array.reduce(calculateOldest);
};

function calculateOldest(currentOldest, person){
    let date = new Date();

    let nextPerson = (person.yearOfDeath != undefined)?(person.yearOfDeath-person.yearOfBirth):(date.getFullYear()-person.yearOfBirth);
    let prevPerson = (currentOldest.yearOfDeath != undefined)?(currentOldest.yearOfDeath-currentOldest.yearOfBirth):(date.getFullYear()-currentOldest.yearOfBirth);
    
    if(nextPerson > prevPerson)
        return person;
    else
        return currentOldest; 

}

// Do not edit below this line
module.exports = findTheOldest;

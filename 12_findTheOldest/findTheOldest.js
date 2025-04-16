const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const currentYear = new Date().getFullYear();

    const ageOfPerson =
      (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const ageOfOldest =
      (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    return ageOfPerson > ageOfOldest ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

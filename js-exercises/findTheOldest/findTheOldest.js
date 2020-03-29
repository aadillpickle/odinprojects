let findTheOldest = function(people) {
    oldestAge = 0;
    oldestPerson = '';
    currentYear= 2020;
    for (var i = 0; i < people.length; i++)
    {
        name = people[i].name
        age = 0;
        if ('yearOfDeath' in people[i])
        {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        else
        {
            age = currentYear - people[i].yearOfBirth;
        }
        
        if (age > oldestAge)
        {
            oldestAge = age;
            oldestPerson = name;
        }
    }
    return oldestPerson
}

module.exports = findTheOldest

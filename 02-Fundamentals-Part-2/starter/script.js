'use strict';
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicence: false,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence. `
    },


};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());


// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);


// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and firends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('property not exist.');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(`${jonas.firstName} has ${jonas.friends.length} firends, and his best friend is called ${jonas.friends[0]}`);


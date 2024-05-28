'use strict';

// const jonas = [
//     'Jonas',
//     'Schemedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {

//     console.log(jonas[i], typeof jonas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`-------start exercise ${exercise}`);
//     for (let rep = 1; rep <= 3; rep++) {
//         console.log(`Lifting weight rep ${rep}`);
//     }
// }

// let rollDice = Math.floor(Math.random() * 6 + 1)
// while (rollDice !== 6) {
//     rollDice = Math.floor(Math.random() * 6 + 1)
//     console.log(rollDice);
// }


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const tips = [];
const totals = [];
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
for (let i = 0; i < bill.length; i++) {
    tips.push(calcTip(bill[i]));
    totals.push(Number(tips[i]) + Number(bill[i]));


}
function calcAverage(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum
        
    }
    return sum / arr.length
}
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));




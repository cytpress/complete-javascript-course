// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let str = '';
function printForecast(temp) {
    for (let i = 0; i < temp.length; i++) {
        str = str + ` ...${temp[i]}° in ${i + 1} days`
    }
}

const tempArr = [17, 21, 23];
printForecast(tempArr);
console.log(str);
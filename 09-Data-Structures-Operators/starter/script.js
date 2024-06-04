'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (const flight of flights.split('+')) {
  const [state, from, des, time] = flight.split(';');
  const stateNormal = state.replaceAll('_', ' ').trim();
  const fromNormal = from.slice(0, 3).toUpperCase();
  const desNormal = des.slice(0, 3).toUpperCase();
  const timeNormal = time.replace(':', 'h').padStart(time.length + 1, '(').padEnd(time.length + 2, ')')
  const output = `${stateNormal} ${fromNormal} ${desNormal} ${timeNormal}`;

  if (output.startsWith('Del')) {
    const newOutput = output.padStart(output.length + 3, '🔴 ')
    console.log(newOutput.padStart(36, ' '));
  } else {
    const newOutput = output.padStart(output.length + 3, '🔴 ')
    console.log(output.padStart(36, ' '))
  }

}
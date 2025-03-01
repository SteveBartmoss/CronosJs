import { getDateNow, getDifference, isValidDate } from "./cronos/cronos.js";

//console.log(getDateNow('SQL'))

//console.log(getDifference('2023-10-01','2023-10-05'))
//console.log(getDifference('2023-10-05','2023-10-01'))

console.log(isValidDate("01-01-2025","DD-MM-YYYY"))
console.log(isValidDate("01/01/2025","DD/MM/YYYY"))
console.log(isValidDate("03-25-2025","MM-DD-YYYY"))
console.log(isValidDate("03/25/2025","MM/DD/YYYY"))
console.log(isValidDate("2025/01/01","YYYY/MM/DD"))
console.log(isValidDate("2025-01-01","YYYY-MM-DD"))

console.log(getDifference('01/10/2025','05/10/2025','DD/MM/YYYY'))
console.log(getDifference('01/10/2025','05-10-2025','DD/MM/YYYY','DD-MM-YYYY'))
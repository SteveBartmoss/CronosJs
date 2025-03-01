import { addDays, addMonths, calculateAge, compareDates, formatDate, getDateNow, getDayReference, getDifference, getFirstDayOfMonth, getLastDayOfMonth, getMonthName, getUnitDifference, getWeekRange, isDateInRange, isValidDate, toTimestamp } from "./cronos/cronos.js";

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

console.log(addDays('01/10/2025','DD/MM/YYYY',4))
console.log(addDays('01-10-2025','DD-MM-YYYY',4))

console.log(getDayReference('28/02/2025','DD/MM/YYYY','es'))
console.log(getDayReference('01/03/2025','DD/MM/YYYY','es'))

console.log(getFirstDayOfMonth('28/02/2025','DD/MM/YYYY'))
console.log(getLastDayOfMonth('05/10/2025','DD/MM/YYYY'))

console.log(calculateAge('28/11/1999','DD/MM/YYYY'))

console.log(formatDate('1999-11-28','YYYY-MM-DD','DD/MM/YYYY'))

console.log(addMonths('01/01/2025','DD/MM/YYYY',4))

console.log(getUnitDifference('01/10/2025','05/10/2025','days','DD/MM/YYYY'))
console.log(getUnitDifference('01/10/2025','05-10-2025','days','DD/MM/YYYY','DD-MM-YYYY'))

console.log(toTimestamp('01/01/2025','DD/MM/YYYY','lalala'))

console.log(compareDates('01/10/2025','05/10/2025','DD/MM/YYYY'))
console.log(compareDates('01/10/2025','05-10-2025','DD/MM/YYYY','DD-MM-YYYY'))

console.log(getMonthName('01/01/2025','DD/MM/YYYY','es'))
console.log(getMonthName('01/10/2025','DD/MM/YYYY','es'))

console.log(isDateInRange('03/10/2025','01/10/2025','05/10/2025','DD/MM/YYYY','DD/MM/YYYY','DD/MM/YYYY'))

console.log(getWeekRange('03/01/2025','DD/MM/YYYY'))
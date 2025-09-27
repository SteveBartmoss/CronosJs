import { addDays, addMonths, calculateAge, compareDates, DateArray, formatDate, getDateNow, getDayReference, getDifference, getFirstDayOfMonth, getLastDayOfMonth, getMonthName, getUnitDifference, getWeekRange, isDateInRange, isValidDate, timestampToDate, toTimestamp, unitDateConvert, unitTimeConvert } from "./cronos/cronos.js";
import { DateObject } from "./cronos/dateObject/dateObject.js";

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

const dateNow = new Date()

console.log(dateNow.getTime())

console.log(timestampToDate(1747510941780))

console.log(unitTimeConvert(1747510941780,'milliseconds','seconds'))

console.log(unitTimeConvert(1747510941780,'milliseconds','minutes'))

console.log(unitTimeConvert(1747510941780,'milliseconds','hours'))

console.log(unitDateConvert(1,'years','days'))

console.log(unitDateConvert(1,'weeks','days'))

console.log(unitDateConvert(1,'months','days'))

console.log(unitDateConvert(1,'quarters','days'))


//Pruebas del objeto dateArray

const dateList = new DateArray([],'DD/MM/YYYY')

dateList.fillDateArray('01/01/2025','05/01/2025')

dateList.showDateArray()

console.log(dateList.getOldest())

console.log(dateList.getNewer())

console.log(dateList.getDaysOfArray())

const orderList = new DateArray(['22/01/2025','04/01/2025','01/01/2025','14/01/2025'],'DD/MM/YYYY')

orderList.mergeSortDate()

orderList.showDateArray()

const dateObj = new DateObject('01/01/2025','DD/MM/YYYY','01:01')

console.log(dateObj.getDateString())
console.log(dateObj.getFormat())
console.log(dateObj.getTime())
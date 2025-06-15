//prototipo para normalizacion de las fechas

import { DateUtils } from "./utils/dateUtils.js"
import { calculateRelativeTime, formatUtility, normalizeUtility } from "./utils/generalUtils.js"

function merge(array, startIndex, middleIndex, endIndex, format){
    const leftSize = middleIndex - startIndex + 1
    const rightSize = endIndex - middleIndex

    const leftSubarray = new Array(leftSize)
    const rightSubarray = new Array(rightSize)

    for(let index = 0; index < leftSize; index++){
        leftSubarray[index] = array[startIndex + index]
    }

    for(let index = 0; index < rightSize; index++){
        rightSubarray[index] = array[middleIndex + 1 + index]
    }

    let leftIndex = 0, rightIndex = 0
    let mergedIndex = startIndex

    while (leftIndex < leftSize && rightIndex < rightSize ){

        const leftDate = new Date(normalizeDate(leftSubarray[leftIndex],format))
        const rightDate = new Date(normalizeDate(rightSubarray[rightIndex],format))

        if(leftDate <= rightDate){
            array[mergedIndex] = leftSubarray[leftIndex]
            leftIndex++
        }
        else{
            array[mergedIndex] = rightSubarray[rightIndex]
            rightIndex++
        }
        mergedIndex++
    }

    while(leftIndex < leftSize){
        array[mergedIndex] = leftSubarray[leftIndex]
        leftIndex++
        mergedIndex++
    }

    while(rightIndex < rightSize){
        array[mergedIndex] = rightSubarray[rightIndex]
        rightIndex++
        mergedIndex++
    }

}

function mergeSortDate(array,startIndex, endIndex, format){
    if(startIndex >= endIndex){
        return
    }

    const middleIndex = Math.floor(startIndex + (endIndex - startIndex)/2)

    mergeSortDate(array, startIndex, middleIndex, format)
    mergeSortDate(array, middleIndex + 1, endIndex, format)
    merge(array, startIndex, middleIndex, endIndex, format)
}
  

export function getDateNow(formatDate) {

    if(typeof formatDate !== "string"){
        throw new Error('formatDate must be a string')
    }

    const dateNow = new Date()

    function pad(number){
        return number < 10 ? '0'+number : number
    }

    const days = pad(dateNow.getDate())
    const month = pad(dateNow.getMonth()+1)
    const hours = pad(dateNow.getHours())
    const minutes = pad(dateNow.getMinutes())
    const seconds = pad(dateNow.getSeconds())
    const timezoneOffset = -dateNow.getTimezoneOffset() / 60

    switch (formatDate) {
        case "ISO":
            return `${dateNow.getFullYear()}-${month}-${days}`

        case "EUR":
            return `${days}/${month}/${dateNow.getFullYear()}`

        case "USA":
            return `${month}/${days}/${dateNow.getFullYear()}`
        case "SQL":
            return `${dateNow.getFullYear()}-${month}-${days} ${hours}:${minutes}:${seconds}`

        default: 
            return dateNow.toLocaleDateString()


    }

}

export function getDifference(firsDate,secondDate,firstFormat=null,secondFormat=null){

    let startDate
    let endDate

    if(secondFormat===null){
        startDate = new Date(DateUtils.normalizeDate(firsDate,firstFormat))
        endDate = new Date(DateUtils.normalizeDate(secondDate,firstFormat))
    }
    else{
        startDate = new Date(DateUtils.normalizeDate(firsDate,firstFormat))
        endDate = new Date(DateUtils.normalizeDate(secondDate,secondFormat))
    }

    let difference = endDate - startDate

    difference = difference / (1000 * 60 * 60 * 24)

    return Math.round(difference)

}

export function addDays(date,format,days){

    let objDate = new Date(DateUtils.normalizeDate(date,format))

    if(isNaN(days)){
        throw new Error("days must be a number")
    }

    let newDate = new Date(objDate.getTime() + (days*24*60*60*1000))

    return DateUtils.formatDate(newDate,format)

}


export function getDayReference(date,format,language='es'){

    const objDate = new Date(DateUtils.normalizeDate(date,format))

    const days = {
        en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        es: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    }

    const dayIndex = objDate.getUTCDay()

    if(days[language]){
        return days[language][dayIndex]
    }else{
        throw new Error('Language not supported')
    }

}

export function isValidDate(date,format){
    return !isNaN(new Date(DateUtils.normalizeDate(date,format)).getTime())
}

export function getFirstDayOfMonth(date,format){

    const objDate = new Date(DateUtils.normalizeDate(date,format))

    const newDate = new Date(objDate.getFullYear(),objDate.getMonth(),1)

    return DateUtils.formatDate(newDate,format)

}

export function getLastDayOfMonth(date,format){

    const objDate = new Date(DateUtils.normalizeDate(date,format))

    const newDate = new Date(objDate.getFullYear(), objDate.getMonth()+1,0)

    return DateUtils.formatDate(newDate,format)

}

export function calculateAge(birthDate,format){
    const today = new Date()
    const birth = new Date(DateUtils.normalizeDate(birthDate,format))

    let age = today.getFullYear() - birth.getFullYear()

    const hasBirthdayPassed = 
        today.getMonth() > birth.getMonth() || 
        (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate())

    if (!hasBirthdayPassed) {
        age--;
    }
    
    return age;
}

export function formatDate(date, format="DD-MM-YYYY",formatFinal){
    
    const objDate = new Date(DateUtils.normalizeDate(date,format))

    return DateUtils.formatDate(objDate,formatFinal)
    
}

export function addMonths(date,format,months){
    const objDate = new Date(DateUtils.normalizeDate(date,format))

    const originalDay = objDate.getUTCDate()
    objDate.setUTCMonth(objDate.getUTCMonth() + months)

    if (objDate.getUTCDate() !== originalDay) {
        objDate.setUTCDate(0);
    }

    return DateUtils.formatDate(objDate,format)

}

export function getUnitDifference(startDate, endDate, unit, startFormat=null,endFormat=null){

    let start
    let end

    if(endFormat===null){
        start = new Date(DateUtils.normalizeDate(startDate,startFormat))
        end = new Date(DateUtils.normalizeDate(endDate,startFormat))
    }
    else{
        start = new Date(DateUtils.normalizeDate(startDate,startFormat))
        end = new Date(DateUtils.normalizeDate(endDate,endFormat))
    }

    const difference = end - start

    switch (unit){
        case 'days':
            return Math.floor(difference/(1000*60*60*24))
        case 'hours': 
            return Math.floor(difference/(1000*60*60))
        case 'minutes':
            return Math.floor(difference/(1000*60))
        case 'seconds':
            return Math.floor(difference/1000)
        default: 
            throw new Error('Unit not supported')
    }
}

export function isLeapYear(year){
    if(isNaN(year)){
        throw new Error('year must be a number')
    }

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export function toTimestamp(date,format,unit){

    const objDate = new Date(DateUtils.normalizeDate(date,format))

    const timestamp = objDate.getTime()

    return unit === 'seconds' ? Math.floor(timestamp / 1000) : timestamp 
}

export function compareDates(date1,date2,formatOne=null,formatTwo=null){

    let d1
    let d2

    if(formatTwo===null){
        d1 = new Date(normalizeUtility(date1,formatOne))
        d2 = new Date(normalizeUtility(date2,formatOne))
    }
    else{
        d1 = new Date(normalizeUtility(date1,formatOne))
        d2 = new Date(normalizeUtility(date2,formatTwo))
    }

    if(isNaN(d1.getTime())||isNaN(d2.getTime())){
        throw new Error("Invalid date")
    }

    if(d1>d2) return 1
    if(d1<d2) return -1
    return 0
}

export function getMonthName(date,format,language='es'){

    const objDate = new Date(normalizeUtility(date,format))

    objDate.setUTCHours(12)

    return new Intl.DateTimeFormat(language, {month: "long"}).format(objDate)
}

export function isDateInRange(date,startDate,endDate,dateFormat=null,startFormat=null,endFormat=null){

    const objDate = new Date(normalizeUtility(date,dateFormat))
    const start = new Date(normalizeUtility(startDate,startFormat))
    const end = new Date(normalizeUtility(endDate,endFormat))

    return objDate >= start && objDate <= end
}

export function getWeekRange(date,format){

    const objDate = new Date(normalizeUtility(date,format))

    const dayOfWeek = objDate.getUTCDay()

    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek

    const startOfWeek = new Date(objDate)
    startOfWeek.setUTCDate(startOfWeek.getUTCDate() + diffToMonday)

    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setUTCDate(startOfWeek.getUTCDate() + 6)

    return { startOfWeek: formatUtility(startOfWeek,format), endOfWeek: formatUtility(endOfWeek,format)}

}

export function timestampToDate(timestamp, unit){

    if(isNaN(timestamp)){
        throw new Error('timestamp must be a number')
    }

    const ms = unit === "seconds" ? timestamp * 1000 : timestamp
    return new Date(ms)
}

export function unitTimeConvert(unit,typeOne,typeTwo){
    
    const timeUnits = {
        milliseconds: 1,
        seconds: 1000,
        minutes: 1000 * 60,
        hours: 1000 * 60 * 60
    }

    return unit * (timeUnits[typeOne]/timeUnits[typeTwo])

}

export function unitDateConvert(unit,typeOne,typeTwo){

    const dateUnits = {
        days: 1,
        weeks: 7,
        months: 30.4375,
        quarters: 91.3125,
        years: 365.25
    }

    return unit * (dateUnits[typeOne]/dateUnits[typeTwo])

}

export function dateAddTime(date,format,unit,typeUnit){

    let objDate = new Date(normalizeUtility(date,format))

    const timeUnits = {
        milliseconds: 1,
        seconds: 1000,
        minutes: 100 * 60,
        hours: 1000 * 60 * 60,
        days: 24 * 1000 * 60 * 60,
    }
    
    let newDate = new Date(objDate)

    if(typeUnit in timeUnits){
        newDate.setTime(newDate.getTime() + unit * timeUnits[typeUnit])
    }
    else if(typeUnit === "months"){
        newDate.setMonth(newDate.getMonth() + unit)
    }
    else if(typeUnit === "years"){
        newDate.setFullYear(newDate.getFullYear() + unit)
    }

    return DateUtils.normalizeDate(newDate,format)

}

export function sortDateArray(dateArray,format){
    mergeSortDate(dateArray, 0, dateArray.length -1, format)
}

export function getElapsedTimne(firstDate,secondDate,firstFormat,secondFormat){

    const objFirst = new Date(normalizeUtility(firstDate,firstFormat))
    const objSecond = new Date(normalizeUtility(secondDate,secondFormat))

    let diference = objSecond - objFirst

    return calculateRelativeTime(diference)

}

export function compareRightnow(date,format){

    const objDate = new Date(normalizeDate(date,format))
    const dateNow = new Date()

    if(objDate>dateNow) 1
    if(objDate<dateNow) -1
    return 0

}


export function getMax(arrayDates, format){

    if(arrayDates.length === 0){
        return null
    }

    let max = arrayDates[0]

    arrayDates.forEach((element)=>{
        const currentDate = new Date(normalizeDate(element,format))
        const maxDate = new Date(normalizeDate(max,format))

        if(currentDate > maxDate){
            max = elemet
        }

    })

    return max

}

export function getMin(arrayDates, format){


    if(arrayDates.length === 0){
      return null
    }
  
    let min = arrayDates[0]
  
    arrayDates.forEach((element)=>{
      
      const currentDate = new Date(normalizeDate(element,format))
      const minDate = new Date()
  
      if(currentDate < minDate){
        min = element
      }
  
    })
  
    return min
    
}
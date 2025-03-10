//prototipo para normalizacion de las fechas

import { formatUtility } from "./utils/generalUtils"

function normalizeDate(date,format=null){

    if(typeof date !== "string"){
        throw new Error("Date must be a string")
    }

    const parts = date.split(/[-\/]/)

    if(parts.length !== 3){
        throw new Error('Invalid date format')
    }

    const formatMap = {
        "DD/MM/YYYY": [2,1,0],
        "MM/DD/YYYY": [2,0,1],
        "YYYY/MM/DD": [0,1,2],
        "DD-MM-YYYY": [2,1,0],
        "MM-DD-YYYY": [2,0,1],
        "YYYY-MM-DD": [0,1,2],
        "YYYY-DD-MM": [0,2,1],
    }

    if (format in formatMap){
        const [y,m,d] = formatMap[format].map(i => parts[i])
        return `${y}-${m}-${d}`
    }

    let [a,b,c] = parts.map(Number)
    let year, month, day

    if(a>31){
        year = a;
        [month, day] = b > 12 ? [c,b] : [b,c]
    } else if (c>31){
        year = c
        [month,day] = a > 12 ? [b,a] : [a,b]
    }else{
        year = c
        [month,day] = [b,a]
    }

    const refactorDate = `${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`

    if (isNaN(Date.parse(refactorDate))) {
        throw new Error("Invalid date")
    }    

    return refactorDate
  
}

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


function calculateRelativeTime(diference){

    if(diference === 0 ) return "Justo ahora"
     
    const seconds = diference/1000
    const minutes = seconds/60
    const hours = minutes/60
    const days = hours/24
    const weeks = days/7
    const months = days/30
    const years = days/365
  
    if(seconds<60){
      return seconds === 1 ? 'Hace un segundo' : `Hace ${Math.floor(seconds)} segundos` 
    }
    if(minutes<60){
      return minutes === 1 ? 'Hace un minuto' : `Hace ${Math.floor(minutes)} minutos`
    }
    if(hours<24){
      return hours === 1 ? 'Hace una hora' : `Hace ${Math.floor(hours)} horas`
    }
    if(days<7){
      return days === 1 ? 'Hace un dia' : `Hace ${Math.floor(days)} días`
    }
    if(weeks<4){
      return weeks === 1 ? 'Hace una semana' : `Hace ${Math.floor(weeks)} semanas`
    }
    if(months<12){
      return months === 1 ? 'Hace un mes' : `Hace ${Math.floor(months)} meses`
    }
  
    return years === 1 ? 'Hace un año' : `Hace ${Math.floor(years)} años`
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
        startDate = new Date(normalizeDate(firsDate,firstFormat))
        endDate = new Date(normalizeDate(secondDate,firstFormat))
    }
    else{
        startDate = new Date(normalizeDate(firsDate,firstFormat))
        endDate = new Date(normalizeDate(secondDate,secondFormat))
    }

    let difference = endDate - startDate

    difference = difference / (1000 * 60 * 60 * 24)

    return Math.round(difference)

}

export function addDays(date,format,days){

    let objDate = new Date(normalizeDate(date,format))

    if(isNaN(days)){
        throw new Error("days must be a number")
    }

    let newDate = new Date(objDate.getTime() + (days*24*60*60*1000))

    return formatUtility(newDate,format)

}


export function getDayReference(date,format,language='es'){

    const objDate = new Date(normalizeDate(date,format))

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
    return !isNaN(new Date(normalizeDate(date,format)).getTime())
}

export function getFirstDayOfMonth(date,format){

    const objDate = new Date(normalizeDate(date,format))

    const newDate = new Date(objDate.getFullYear(),objDate.getMonth(),1)

    return formatUtility(newDate,format)
}

export function getLastDayOfMonth(date,format){

    const objDate = new Date(normalizeDate(date,format))

    const newDate = new Date(objDate.getFullYear(), objDate.getMonth()+1,0)

    return formatUtility(newDate,format)

}

export function calculateAge(birthDate,format){
    const today = new Date()
    const birth = new Date(normalizeDate(birthDate,format))

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
    
    const objDate = new Date(normalizeDate(date,format))

    return formatUtility(objDate,format)

}

export function addMonths(date,format,months){
    const objDate = new Date(normalizeDate(date,format))

    const originalDay = objDate.getUTCDate()
    objDate.setUTCMonth(objDate.getUTCMonth() + months)

    if (objDate.getUTCDate() !== originalDay) {
        objDate.setUTCDate(0);
    }

    return formatUtility(objDate,format)

}

export function getUnitDifference(startDate, endDate, unit, startFormat=null,endFormat=null){

    let start
    let end

    if(endFormat===null){
        start = new Date(normalizeDate(startDate,startFormat))
        end = new Date(normalizeDate(endDate,startFormat))
    }
    else{
        start = new Date(normalizeDate(startDate,startFormat))
        end = new Date(normalizeDate(endDate,endFormat))
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

    const objDate = new Date(normalizeDate(date,format))

    const timestamp = objDate.getTime()

    return unit === 'seconds' ? Math.floor(timestamp / 1000) : timestamp 
}

export function compareDates(date1,date2,formatOne=null,formatTwo=null){

    let d1
    let d2

    if(formatTwo===null){
        d1 = new Date(normalizeDate(date1,formatOne))
        d2 = new Date(normalizeDate(date2,formatOne))
    }
    else{
        d1 = new Date(normalizeDate(date1,formatOne))
        d2 = new Date(normalizeDate(date2,formatTwo))
    }

    if(isNaN(d1.getTime())||isNaN(d2.getTime())){
        throw new Error("Invalid date")
    }

    if(d1>d2) return 1
    if(d1<d2) return -1
    return 0
}

export function getMonthName(date,format,language='es'){

    const objDate = new Date(normalizeDate(date,format))

    objDate.setUTCHours(12)

    return new Intl.DateTimeFormat(language, {month: "long"}).format(objDate)
}

export function isDateInRange(date,startDate,endDate,dateFormat=null,startFormat=null,endFormat=null){

    const objDate = new Date(normalizeDate(date,dateFormat))
    const start = new Date(normalizeDate(startDate,startFormat))
    const end = new Date(normalizeDate(endDate,endFormat))

    return objDate >= start && objDate <= end
}

export function getWeekRange(date,format){

    const objDate = new Date(normalizeDate(date,format))

    const dayOfWeek = objDate.getUTCDay()

    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek

    const startOfWeek = new Date(objDate)
    startOfWeek.setUTCDate(startOfWeek.getUTCDate() + diffToMonday)

    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setUTCDate(startOfWeek.getUTCDate() + 6)

    return {startOfWeek: formatUtility(startOfWeek,format), endOfWeek: formatUtility(endOfWeek,format)}

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

    let objDate = new Date(normalizeDate(date,format))

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

    return formatUtility(newDate,format)

}

export function sortDateArray(dateArray,format){
    mergeSortDate(dateArray, 0, dateArray.length -1, format)
}

export function getElapsedTimne(firstDate,secondDate,firstFormat,secondFormat){

    const objFirst = new Date(normalizeDate(firstDate,firstFormat))
    const objSecond = new Date(normalizeDate(secondDate,secondFormat))

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

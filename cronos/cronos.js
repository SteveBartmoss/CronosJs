//prototipo para normalizacion de las fechas

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
    }

    if (format in formatMap){
        const [y,m,d] = formatMap[format].map(i => past[i])
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
    if(isNaN(new Date(refactorDate),getTime())){
        throw new Error("Invalid date")
    }

    return refactorDate
  
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

export function getDifference(firsDate,secondDate){
    const startDate = new Date(firsDate)
    const endDate = new Date(secondDate)

    if(isNaN(startDate.getTime())||isNaN(endDate.getTime())){
        throw new Error("Invalid date")
    }

    let difference = endDate - startDate

    difference = difference / (1000 * 60 * 60 * 24)

    return Math.round(difference)

}

export function addDays(date, days){
    let objDate = new Date(date)

    if(isNaN(objDate.getTime())){
        throw new Error("Invalid date")
    }

    let newDate = new Date(objDate.getTime() + (days*24*60*60*1000))

    return newDate
}


export function getDayReference(date,language='es'){
    const objDate = new Date(date)

    if(isNaN(objDate.getTime())){
        throw new Error("Invalid date")
    }

    const days = {
        en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        es: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    }

    const dayIndex = objDate.getDay()

    if(days[language]){
        return days[language][dayIndex]
    }else{
        throw new Error('Language not supported')
    }

}

export function isValidDate(date,format){
    return !isNaN(new Date(normalizeDate(date,format)).getTime())
}

/*
notas para la funcion isValidDate

console.log(isValidDate("01-01-2025")) // true
console.log(isValidDate("01/01/2025")) // true
console.log(isValidDate("01-30-2025")) // true
console.log(isValidDate("01/30/2025")) // true
console.log(isValidDate("28-03-2025")) // false
console.log(isValidDate("28/03/2025")) // false

  el formato esperado de new Date es YYYY-MM-DD
  Para otros formatos, como DD-MM-YYYY o DD/MM/YYYY, el comportamiento puede variar dependiendo del navegador o el entorno de ejecución (Node.js).
  
  Cuando usas new Date("28-03-2025") o new Date("28/03/2025"), JavaScript no reconoce estos formatos como válidos.

  En muchos casos, el constructor Date interpreta MM-DD-YYYY o MM/DD/YYYY como válidos, pero no DD-MM-YYYY o DD/MM/YYYY.

  se debe implementar una funcion para normalizar las fechas para que sea cual sea el formato que se envia, se convierta al formato YYYY-MM-DD
*/

export function getFirstDayOfMonth(date){
    const objDate = new Date(date)

    if(isNaN(objDate.getTime())){
        throw new Error("Invalid date")
    }

    return new Date(objDate.getFullYear(),objDate.getMonth(),1)
}

export function getLastDayOfMonth(date){
    const objDate = new Date(date)

    if(isNaN(objDate.getTime())){
        throw new Error("Invalid date")
    }

    return new Date(objDate.getFullYear(), objDate.getMonth()+1,0)
}

export function calculateAge(birthDate){
    const today = new Date()
    const birth = new Date(birthDate)

    if(isNaN(birth.getTime())){
        throw new Error("Invalid date")
    }

    let age = today.getFullYear() - birth.getFullYear()

    const hasBirthdayPassed = 
        today.getMonth() > birth.getMonth() || 
        (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate())

    if (!hasBirthdayPassed) {
        age--;
    }
    
    return age;
}

export function formatDate(date, format="DD-MM-YYYY"){
    
    const objDate = new Date(date)

    if(isNaN(objDate.getTime())){
        throw new Error("Invalid date")
    }

    const day = objDate.getDate()
    const month = objDate.getMonth()+1
    const year = objDate.getFullYear()

    const pad = (number) => (number < 10 ? "0"+number : number)

    return format.replace("DD",pad(day)).replace("MM",pad(month)).replace("YYYY",pad(year))
}

export function addMonths(date,months){
    const objDate = new Date(date)

    if(isNaN(objDate.getTime())){
        throw new Error("Invalid date")
    }

    const day = objDate.getDate()
    objDate.setMonth(objDate.getMonth()+months)

    if(objDate.getDate !== day){
        objDate.setDate(0)
    }

    return objDate
}

export function getUnitDifference(startDate, endDate, unit){

    const start = new Date(startDate)
    const end = new Date(endDate)

    if(isNaN(start.getTime())||isNaN(end.getTime())){
        throw new Error("Invalid date")
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
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export function toTimestamp(date,unit){
    const objDate = new Date(date)

    if(isNaN(objDate.getTime())){
        throw new Error("Invalid date")
    }

    const timestamp = objDate.getTime()

    return unit === 'seconds' ? Math.floor(timestamp / 1000) : timestamp 
}

export function compareDates(date1,date2){
    const d1 = new Date(date1)
    const d2 = new Date(date2)

    if(isNaN(d1.getTime())||isNaN(d2.getTime())){
        throw new Error("Invalid date")
    }

    if(d1>d2) return 1
    if(d1<d2) return -1
    return 0
}

export function getMonthName(date, language='es'){
    const objDate = new Date(date)

    if(isNaN(objDate.getTime())){
        throw new Error("Invalid date")
    }

    return new Intl.DateTimeFormat(language, {month: "long"}).format(objDate)
}

export function isDateInRange(date,startDate,endDate){
    const objDate = new Date(date)
    const start = new Date(startDate)
    const end = new Date(endDate)

    if(isNaN(objDate.getTime())||isNaN(start.getTime())||isNaN(end.getTime())){
        throw new Error("Invalid date")
    }

    return objDate >= start && objDate <= end
}

export function getWeekRange(date){
    const objDate = new Date(date)

    if(isNaN(objDate.getTime())){
        throw new Error("invalid date")
    }

    const dayOfWeek = objDate.getDay()

    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek

    const startOfWeek = new Date(objDate)
    startOfWeek.setUTCDate(startOfWeek.getUTCDate() + diffToMonday)

    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setUTCDate(startOfWeek.getUTCDate() + 6)

    return { startOfWeek, endOfWeek}

}

export function timestampToDate(timestamp, unit){
    const ms = unit === "seconds" ? timestamp * 1000 : timestamp
    return new Date(ms)
}
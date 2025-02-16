

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
            return `${month}/${days}/${dateNow.getFullYear()}`;
        case "SQL": 
            return `${dateNow.getFullYear()}-${month}-${days} ${hours}:${minutes}:${seconds} ${timezoneOffset >= 0 ? '+' : '-'}${pad(timezoneOffset)}:00`

        default: 
            return dateNow.toLocaleDateString()


    }

}

export function getDifference(firsDate,secondDate){
    const startDate = new Date(firsDate)
    const endDate = new Date(secondDate)

    if(isNaN(startDate)||isNaN(endDate)){
        throw new Error("Invalid date")
    }

    let difference = endDate - startDate

    difference = difference / (1000 * 60 * 60 * 24)

    return Math.round(diference)

}

export function addDays(date, days){
    let objDate = new Date(date)

    if(isNaN(objDate)){
        throw new Error("Invalid date")
    }

    let newDate = new Date(objDate.getTime() + (days*24*60*60*1000))

    return newDate.toLocaleDateString()
}


export function getDayReference(date,language='es'){
    const objDate = new Date(date)

    if(isNaN(objDate)){
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
        throw new Error('Language not soported')
    }

}

export function isValidDate(date){
    return !isNaN(new Date(date))
}

export function getFirstDayOfMonth(date){
    const objDate = new Date(date)

    if(isNaN(objDate)){
        throw new Error("Invalid date")
    }

    return new Date(objDate.getFullYear(),objDate.getMonth(),1)
}

export function getLastDayOfMonth(date){
    const objDate = new Date(date)

    if(isNaN(objDate)){
        throw new Error("Invalid date")
    }

    return new Date(objDate.getFullYear(), objDate.getMonth()+1,0)
}
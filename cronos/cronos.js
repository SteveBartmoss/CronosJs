

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

    let diference = endDate - startDate

    diference = diference / (1000 * 60 * 60 * 24)

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


export function getDayReference(date){
    const objDate = new Date(date)

    switch(objDate.getDay()){
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2: 
            return 'Thusday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5: 
            return 'Friday'
        case 6: 
            return 'Saturday'
    }

}
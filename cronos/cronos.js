

export function getDateNow(formatDate) {

    const dateNow = new Date()

    function pad(number){
        return number < 10 ? '0'+number : number
    }

    const days = pad(dateNow.getDate())
    const month = pad(dateNow.getMonth())
    const hours = pad(dateNow.getHours())
    const minutes = pad(dateNow.getMinutes())
    const seconds = pad(dateNow.getSeconds())

    switch (formatDate) {
        case "ISO":
            return `${dateNow.getFullYear()}-${month}-${days}`

        case "EUR":
            return `${days}/${month}/${dateNow.getFullYear()}`

        case "USA":
            return `${month}/${days}/${dateNow.getFullYear()}`;
        case "SQL": 
            return `${dateNow.getFullYear()}-${month}-${days} ${hours}:${minutes}:${seconds}`

        default: 
            return dateNow.toLocaleDateString()


    }

}

export function getDiference(firsDate,secondDate){
    const startDate = new Date(firsDate)
    const endDate = new Date(secondDate)

    if(isNaN(startDate)||isNaN(endDate)){
        throw new Error("Invalid date")
    }

    let diference = endDate - startDate

    diference = diference / (1000 * 60 * 60 * 24)

    return Math.round(diference)

}
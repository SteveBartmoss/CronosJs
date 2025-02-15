

export function getDateNow(formatDate) {

    const dateNow = new Date()

    let days = ''
    let month = ''

    if (dateNow.getDate() < 10) {
        days = '0' + dateNow.getDate()
    } else {
        days = dateNow.getDate()
    }
    if (dateNow.getMonth() + 1 < 10) {
        month = '0' + (dateNow.getMonth() + 1)
    } else {
        month = dateNow.getMonth() + 1
    }

    switch (formatDate) {
        case "ISO":
            return `${dateNow.getFullYear()}-${month}-${days}`

        case "EUR":
            return `${days}/${month}/${dateNow.getFullYear()}`

        case "USA":
            return `${month}/${days}/${dateNow.getFullYear()}`;
        case "SQL": 
            return `${dateNow.getFullYear()}-${month}-${days} ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`

    }

}
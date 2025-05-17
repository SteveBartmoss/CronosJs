
export function normalizeUtility(date,format=null){

    if(typeof date !== "string"){
        throw new Error("Date must be a string")
    }

    const parts = date.split(/[-\/]/)

    if(parts.length !== 3){
        throw new Error('Invalid date format')
    }

    const formatMap = {
        "DD/MM/YYYY": [2,1,0],
        "DD-MM-YYYY": [2,1,0],
        "MM/DD/YYYY": [2,0,1],
        "MM-DD-YYYY": [2,0,1],
        "YYYY/MM/DD": [0,1,2],
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

export function formatUtility(date,format){

    const day = date.getUTCDate()
    const month = date.getUTCMonth()+1
    const year =  date.getUTCFullYear()

    const pad = (number) => (number < 10 ? "0"+number : number )

    return format.replace("DD",pad(day)).replace("MM",pad(month)).replace("YYYY",pad(year))
    
}

export function calculateRelativeTime(diference){

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
        return hours === 1 ? 'Hace una hora' : `Hace ${Math.floor(houres)} horas`
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
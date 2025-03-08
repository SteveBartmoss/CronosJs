

export function normalizeDate(date,format=null){
    if(typeof date !== "string"){
        throw new Error("Date must be a string")
    }

    const parts = date.split(/[-\/]/)

    if(parts.length !== 3){
        throw new Error('Invalid date format')
    }

    const formatMap = {
        "DD/MM/YYYY": [2, 1, 0],
        "DD-MM-YYYY": [2, 1, 0],
        "MM/DD/YYYY": [2, 0, 1],
        "MM-DD-YYYY": [2, 0, 1],
        "YYYY/MM/DD": [0, 1, 2],
        "YYYY-MM-DD": [0, 1, 2],
        "YYYY-DD-MM": [0, 2, 1],
    }

    if(format in formatMap){
        const [y,m,d] = formatMap[format].map(i => parts[i])
        return `${y}-${m}-${d}`
    }

    let [a,b,c] = parts.map(Number)
    let year, month, day

    if(a>31){
        year = a
        [month, day] = b > 12 ? [c,b] : [b,c]        
    }else if (c>31){
        year = c
        [month, day] = a > 12 ? [b,a] : [a,b]
    }else{
        year = c
        [month,day] = [b,a]
    }

    const refactorDate = `${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`

    if (isNaN(Date.parse(refactorDate))){
        throw new Error("Invalid date")
    }

    return refactorDate
    
}
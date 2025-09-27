

export class DateObject{

    constructor(dateString,format,time){
        this.dateString = dateString
        this.format = format
        this.time = time
        this.dateJs = null
    }

    setDateString(date){
        this.dateString = date
    }

    setFormat(format){
        this.format = format
    }

    setTime(time){
        this.time = time
    }

    getDateString(){
        return this.dateString
    }

    getFormat(){
        return this.format
    }

    getTime(){
        return this.time
    }

    getDateJs(){
        return this.dateJs
    }

    
}
import { DateUtils } from "../utils/dateUtils.js"


export class DateObject{

    constructor(dateString,format,time){
        this.dateString = dateString
        this.format = format
        this.time = time
        this.dateJs = new Date(DateUtils.normalizeDate(this.dateString,this.format))
    }

    setDateJs(){
        
        this.dateJs = new Date(DateUtils.normalizeDate(this.dateString,this.format))

    }

    getDifferenceInDays(date,format){

        let compareDate = date instanceof DateObject ? date : new Date(DateUtils.normalizeDate(date,format))

        const diference = this.dateJs - compareDate

        return Math.round(diference/(1000 * 60 * 60 * 24))

    }

    addDays(days){

        this.dateJs = new Date(this.dateJs.getTime() + (days*24*60*60*1000))
        
    }

    #buildDate(){
        this.dateJs = new Date(DateUtils.normalizeDate(this.dateString,this.format))
    }
    
}
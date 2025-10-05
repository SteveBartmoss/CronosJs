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

}
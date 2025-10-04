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

    getDifference(date,format){
        if(date instanceof DateObject){
            let difference = this.dateJs - date.dateJs
            difference = difference / (1000 * 60 * 60 * 24)

            return Math.round(difference)
        }


        let swapDate = new Date(DateUtils.normalizeDate(date,format))

        let diference = this.dateJs - swapDate

        diference = diference / (1000 * 60 * 60 * 24)

        return Math.round(diference)

    }

    
}
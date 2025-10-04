import { DateUtils } from "../utils/dateUtils.js"


export class DateObject{

    constructor(dateString,format,time){
        this.dateString = dateString
        this.format = format
        this.time = time
        this.setDateJs
    }

    setDateJs(){
        
        this.dateJs = new Date(DateUtils.normalizeDate(this.dateString,this.format))

    }

    
}
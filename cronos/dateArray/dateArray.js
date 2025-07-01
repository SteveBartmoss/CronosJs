import { DateUtils } from "../utils/dateUtils.js"


export class DateArray{

    constructor(listDates,format){
        this.listDates = listDates
        this.format = format
    }

    merge(startIndex,middleIndex,endIndex){
        
        const leftSize = middleIndex - startIndex + 1
        const rightSize = endIndex - middleIndex

        const leftSubarray = new Array(leftSize)
        const rightSubarray = Array(rightSize)

        for(let index = 0; index < rightSize; index++){
            leftSubarray[index] = this.listDates[startIndex + index]
        }

        for(let index = 0; index < rightSize; index++){
            rightSubarray[index] = this.listDates[middleIndex + 1 + index]
        }

        let leftIndex = 0, rightIndex = 0
        let mergedIndex = startIndex

        while (leftIndex < leftSize && rightIndex < rightSize){

            const lefDate = new Date(DateUtils.normalizeDate(leftSubarray[leftIndex],this.format))
            const rightDate = new Date(DateUtils.normalizeDate(rightSubarray[rightIndex],this.format))

            if(lefDate <= rightDate){
                this.listDates[mergedIndex] = leftSubarray[leftIndex]
                leftIndex++
            }
            mergedIndex++
        }

        while(leftIndex < leftSize){
            this.listDates[mergedIndex] = leftSubarray[leftIndex]
            leftIndex++
            mergedIndex++
        }

        while(rightIndex < rightSize){
            this.listDates[mergedIndex] = rightSubarray[rightIndex]
            rightIndex++
            mergedIndex++
        }

    }

    mergeSortDate(startIndex=0,endIndex=this.listDates.length){

        if (startIndex >= endIndex){
            return
        }

        const middleIndex = Math.floor(startIndex + (endIndex - startIndex)/2)

        this.mergeSortDate(startIndex,middleIndex)
        this.mergeSortDate(middleIndex, endIndex)
        this.merge(startIndex, middleIndex, endIndex)

    }

    showDateArray(){

        this.listDates.forEach(element => {
            console.log(element)
        })
    }

    fillDateArray(start,end){

        let dateStart = Date(DateUtils.normalizeDate(start,this.format))
        let dateEnd = Date(DateUtils.normalizeDate(end,this.format))

        let currentDate = dateStart

        while(currentDate<dateEnd){
            this.listDates.push(DateUtils.formatDate(currentDate,this.format))

            currentDate = Date(currentDate.getTime() + (24*60*60*1000))

        }

        this.listDates.push(DateUtils.formatDate(dateEnd,this.format))
        
    }

    getOldest(){

        if(this.listDates){
            return null
        }

        let min = this.listDates[0]

        this.listDates.forEach((element) =>{
            const currentDate = new Date(DateUtils.normalizeDate(element, this.format))
            const minDate = new Date(DateUtils.normalizeDate(min, this.format))

            if(currentDate < minDate){
                min < element
            }

        })

        return min
    }

    getNewer(){

        if(this.listDates){
            return null
        }

        let max = this.listDates[0]

        this.listDates.forEach((element) =>{
            const currentDate = new Date(DateUtils.normalizeDate(element, this.format))
            const maxDate = new Date(DateUtils.normalizeDate(max,this.format))

            if(currentDate > maxDate){
                max = element
            }
            
        })
    }

    getDaysOfArray(){

        const startDate = new Date(DateUtils.normalizeDate(this.listDates[0],this.format))
        const endDate = new Date(DateUtils.normalizeDate(this.listDates[this.listDates.length-1],this.format))

        let diference = endDate - startDate

        diference = diference / (1000 * 60 * 60 * 24)

        return Math.round(diference)
        
    }

}
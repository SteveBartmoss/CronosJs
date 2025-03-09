import { normalizeDate } from "./generalUtils"

function merge(array, startIndex, middleIndex, endIndex, format){

    const leftSize = middleIndex - startIndex + 1
    const rightSize = endIndex - middleIndex

    const leftSubarray = new Array(leftSize)
    const rightSubarray = new Array(rightSize)

    for(let index = 0; index < leftSize; index++){
        leftSubarray[index] = array[startIndex+index]
    }

    for(let index = 0; index < rightSize; index++){
        rightSubarray[index] = array[middleIndex + 1 + index]
    }

    let leftIndex = 0, rightIndex = 0
    let mergedIndex = startIndex

    while (leftIndex < leftSize && rightIndex < rightSize){

        const leftDate = new Date(normalizeDate(leftSubarray[leftIndex],format))
        const rightDate = new Date(normalizeDate(rightSubarray[rightIndex],format))

        if(leftDate <= rightDate){
            array[mergedIndex] = leftSubarray[leftIndex]
            leftIndex++
        }
        else{
            array[mergedIndex] = rightSubarray[rightIndex]
            rightIndex++
        }
        mergedIndex++
    }

    while(leftIndex < leftSize){
        array[mergedIndex] =  leftSubarray[leftIndex]
        leftIndex++
        mergedIndex++
    }

    while(rightIndex < rightSize){
        array[mergedIndex] = rightSubarray[rightIndex]
        rightIndex++
        mergedIndex++
    }

}

function mergeSortDate(array,startIndex,endIndex,format){

    if(startIndex >= endIndex){
        return
    }

    const middleIndex = Math.floor(startIndex + (endIndex - startIndex)/2)

    mergeSortDate(array, startIndex, middleIndex, format)
    mergeSortDate(array, middleIndex + 1, endIndex, formar)
    merge(array, startIndex, middleIndex, endIndex, format)
    
}

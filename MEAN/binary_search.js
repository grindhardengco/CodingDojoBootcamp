
//assume [1,2,3,4,5,6,7,8,9], target 3
function binarySearch(arr, target){
    if(arr.length <1){
        return "This array is empty."
    }
    
    else if(arr.length == 1 && arr[0] == target){
        var message = `The only value in this array is the target.`
        return message
    }
    else if(arr.length == 1 && arr[0] != target){
        var message = `The only value in this array is not the target.`
        return message
    }

    let left = 0
    let right = arr.length-1

    while (left <= right){
        // console.log(`left = ${left}`)
        // console.log(`right = ${right}`)
        // console.log(`check index = ${left + Math.floor((right-left)/2)}`)
        if(arr[left + Math.floor((right-left)/2)] == target){
            message = `The target is located at index ${left + Math.floor((right-left)/2)}.`
            return message
        }
        else{
            if(arr[left + Math.floor((right-left)/2)-1] >= target){
                right = left + Math.floor((right-left)/2) - 1
            }
            else{
                left = left + Math.floor((right-left)/2) + 1
            }
        }
    }
    message = "The target is not present in this array."
    return message
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 9)) 
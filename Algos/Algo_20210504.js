function insertionSort(arr){
    for(i=1; i<arr.length; i++){
        var temp = arr[i]
        for (var j=i; j>0; j--){
            if(temp < arr[j-1]){
                arr[j] = arr[j-1]
            }
            else{
                break
            }
        }
        arr[j] = temp
    }
    return arr
}

console.log(insertionSort([9,8,6,1,5,44,4,2]))
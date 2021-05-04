//INCOMPLETE
function insertionSort(arr){
    for(i=1; i<arr.length; i++){
        temp = arr[i]
        for (j=i; j>=0; j--){
            if(temp < arr[j-1]){
                arr[j] = arr[j-1]

            }
            arr[j] = temp
        }

        

    }
    return arr
}

console.log(insertionSort([9,8,7,6]))
function insertionSort(arr){
    for(i=1; i<arr.length; i++){
        temp = arr[i]
        if (arr[i] - arr[i-1]){
            
            for (j=i; j>=0; j--){
                if(temp < arr[i-1]){
                    arr[j] = arr[j-1]
                }
                arr[j] = temp
            }
        }

        

    }
    return arr
}

console.log(insertionSort([1,1,2,1,1]))
function bubbleSort(arr){
    for (i=0; i<arr.length; i++){
        for (j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                var small = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = small;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([0,1,5,-2,2,3,8]));
function bubbleSort(arr){
    let i=0, finished_counter=0;
    
    while (i<arr.length && arr[i]<=arr[i+1])
        i+=1

    for (j=i; j<arr.length-finished_counter; j++){
        if(arr[j] > arr[j+1]){
            var small = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = small;
        }
    }
    finished_counter+=1
    i=0
    return arr;
}

console.log(bubbleSort([0,1,5,-2,2,3,8]));
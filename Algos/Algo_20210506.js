var arr = [5,3,7,1,2];
function partition(arr){
    for(i=1; i<arr.length; i++){
        var pivot = arr[0]
        var temp = arr[i]
        for (var j=i; j>0; j--){
            if(arr[j]<pivot && arr[j-1] >= pivot){
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

console.log(partition(arr))
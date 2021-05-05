//INCOMPELTE...

var arr1 = [1,2,3,4]
var arr2 = [10,11,12,13]
function combineArr(arr1, arr2){
    
    var newArr = [];
    for(i=0; i<arr1.length; i++){
        if(arr1[i] < arr2[i]){
            newArr.push(arr1[i])

            for()
        }
        else{
            newArr.push(arr2[i])
        }

        for()
        
    }

    return newArr;
}

// console.log(combineArr([9,8,7,6], [1,1,1,1]))

var arr = [9,4,3,55,6,894,10,1,-3]
function mergeSort(arr){
    //recursively break array into single-element arrays
    function breakArr(arr){

    }
    if(arr.length==1){
        console.log(arr);
        return false
    }

    else{
        var arr1 = [];
        var arr2 = [];
        var arrNewLength = Math.floor(arr.length/2)
        for (i=0; i<arrNewLength; i++){
            arr1.push(arr[i]);
        }
        for (j=arrNewLength; j<arr.length; j++){
            arr2.push(arr[j])
        }
        
        // console.log(arr1)
        // console.log(arr2)
        
        mergeSort(arr1)
        mergeSort(arr2)
    }


    //recursively combine single-element arrays into a sorted single array
    
    return false
    break(arr)
}

mergeSort(arr);
function combineArr(arr1, arr2){
    var newArr = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++
        }
        else{
            newArr.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        newArr.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        newArr.push(arr2[j])
        j++
    }

    return newArr;
}

// console.log(combineArr([6,7,8,9], [3,4,5,6,7]))

var arr = [9,4,3,55,6,894,10,1,-3]
function mergeSort(arr){
    //recursively break array into single-element arrays
    if(arr.length==1){
        return arr
    }

    else{
        var arr1 = [];
        var arr2 = [];
        for (i=0; i<Math.floor(arr.length/2); i++){
            arr1.push(arr[i]);
        }
        for (j=Math.floor(arr.length/2); j<arr.length; j++){
            arr2.push(arr[j])
        }    
        // console.log(arr1)
        // console.log(arr2)
        // mergeSort(arr1)  used before putting into return
        // mergeSort(arr2)

        return(combineArr(mergeSort(arr1), mergeSort(arr2)))
    }
}

console.log(mergeSort(arr));

//CHRIS' SOLUTION
function mergeSortChris(arr){
    //escape
    if (arr.length == 1){
        return arr;
    }
    //iteration
    let left = arr.slice(0,Math.floor(arr.length/2))
    let right = arr.slice(Math.floor(arr.length/2))
    
    return(combineArr(mergeSortChris(left),mergeSortChris(right)))
}

console.log(mergeSortChris(arr));
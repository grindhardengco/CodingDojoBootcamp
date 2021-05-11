// function partition(arr){
//     for(i=1; i<arr.length; i++){
//         var pivot = arr[0];
//         var temp = arr[i];
//         for (var j=i; j>0; j--){
//             if(arr[j]<pivot && arr[j-1] >= pivot){
//                 arr[j] = arr[j-1];
//             }
//             else{
//                 break;
//             }
//         }
//         arr[j] = temp;
//     }
//     return arr;
// }

// console.log(partition(arr))
var arr = [5,3,7,1,2];
function partitionChris(arr, start, end){
    if(end - start <=3){
        return arr;
    }
    else{
        var part = (arr[0]+arr[arr.length-1]+arr[Math.floor(arr.length/2)])/3;
        for (let i=1; i<arr.length; i++){
                while(arr[i] <= part && arr[i-1] >= part){
                    [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
                    i--;
                }
        
        }
        return partitionChris(arr, );

    }
}
console.log(partitionChris(arr));

// function partition(arr){
//     part = (arr[0]+arr[arr.length-1]+arr[Math.floor(arr.length/2)])/3
//     for(let i = 1; i <arr.length; i++){
        
//         while(arr[i] < part && arr[i-1] >= part){
//             [arr[i],arr[i-1]] = [arr[i-1], arr[i]] //es6 swap
//             i--
//         }
        
//     }
// }


// let arr = [5,2,7,3,4,6,1];

// partition(arr)
// console.log(arr)
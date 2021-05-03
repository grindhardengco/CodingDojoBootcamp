
var input = [0,1,5,-2,2,3,8];
function bubbleSort(input){
    for (i=0; i<input.length; i++){
        for (j=0; j<input.length-i-1; j++){
            if(input[j] > input[j+1]){
                var small = input[j+1];
                input[j+1] = input[j];
                input[j] = small;
            }
        }
    }
    return input;
}

console.log(bubbleSort(input));
//this is good.


function selectionSort(input){
    for (i=0; i<input.length; i++){
        
        var smallest = i;
        for (j=i; j<input.length; j++){
            
            if(input[j] < input[smallest]){
                smallest = j;
            }
        }
        
        if (smallest != i){
            smallest = input[smallest];
            input[smallest] = input[i];
            input[i] = smallest;
        }
        console.log("swap")
    }

    return input;
}

console.log(selectionSort(input));
//this is good. 
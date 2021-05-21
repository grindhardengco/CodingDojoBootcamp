function quickBrownFox(input, partial = "", position = 0, output = []){
    if(position == input.length){
        output.push(partial)
    }

    else{
        for(let i=0; i<input[position].length; i++){
                quickBrownFox(input, partial + input[position][i] + ' ', position + 1, output)
        }
    }
    return output;
}

console.log(quickBrownFox([["quick", "lazy"],["brown", "red", "chartruce"],["fox","dog"]]))
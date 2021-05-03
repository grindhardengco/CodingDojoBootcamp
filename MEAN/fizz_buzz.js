function fizzBuzz(n){
    let i=1, output='';
    while(i != n+1){
        if(i % 3 == 0 && i % 5 == 0){
            output = output + "FizzBuzz, "
        }
        else if(i % 5 == 0){
            output = output + "Buzz, "
        }
        else if (i % 3 == 0){
            output = output + "Fizz, "
        }
        else{
            output = output + `${i}, `
        }
        i=++i
    }
    return output
}

console.log(fizzBuzz(23))
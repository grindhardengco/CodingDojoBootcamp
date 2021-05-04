function coinChange(input){
    let opt_change = {
        'dollars': 0,
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0,
    }
    if(input/100 >= 1){
        opt_change.dollars = Math.floor(input/100)
        input = input % 100
    }

    if(input/25 >= 1){
        opt_change.quarters = Math.floor(input/25)
        input = input %25
    }

    if(input/10 >= 1){
        opt_change.dimes = Math.floor(input/10)
        input = input %10
    }
    
    if(input/5 >= 1){
        opt_change.nickels = Math.floor(input/5)
        input = input %5
    }

    opt_change.pennies = input   
    return opt_change
}


console.log(coinChange(202))
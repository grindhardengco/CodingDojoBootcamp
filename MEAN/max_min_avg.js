function maxMinAvg(arr){
    if (arr.length<1){
        let output = [0,0,0]
        return output
    }
    let i = 1, min = arr[0], max = arr[0], sum = arr[0]
    while(i < arr.length){
        if (arr[i] < min)
            min = arr[i]
        if (arr[i] > max)
            max = arr[i]
        sum = sum + arr[i]
        i = i+1
    }
    let avg = sum / (arr.length)
    output = [max, min, avg]
    return output
}

console.log(maxMinAvg([2,3,-100,4,5,654987]))
function isa(set1,set2){
    let i = 0
    let y = 0
    let result =[]
    while(i < set1.length && y < set2.length){
        if(set1[i]==set2[y]){
            result.push(set1[i])
            i++
            y++ 
        }else if(set1[i]< set2[y]){
            i++
        }else{
            y++
        }
    }
    return(result)
}

a = [1,2,2,6,7]
b = [2,2,6,6,8]

console.log(isa(a,b))
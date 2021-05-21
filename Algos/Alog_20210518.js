function isa(set1,set2){
    let i = 0
    let j = 0
    let result =[]
    while(j < set2.length){
        if(set1[i]==set2[j]){
            result.push(set1[i])
            i++
            j++ 
        }else if(set1[i] < set2[j]){
            result.push(set1[i])
            i++
        }else{
            result.push(set2[j])
            j++
        }
    }
    return(result)
}

//i  0,1,2,3,4
a = [1,2,2,6,7]
//j  0,1,2,3,4
b = [2,2,6,6,8]

console.log(isa(a,b))
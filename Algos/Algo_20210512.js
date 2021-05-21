function dedupe(string){
    var newStrg = "";
    for (i=string.length-1; i>=0; i--){
        // console.log('string[i] (before j loop): ',string[i])
        for (j=0; j<newStrg.length; j++){
        // console.log('string[i] (after j loop start): ',string[i], 'newStrg[j]: ',newStrg[j])            
            // console.log(newStrg.length, j)
            if(string[i] == newStrg[j]){
                break;
            }
        }
        // console.log('j = ',j, 'newStrg.length = ', newStrg.length)
        if(j == newStrg.length){
            // console.log('string[i] before add to newStrg: ', string[i])
            newStrg = string[i] + newStrg;
            // console.log('newStrg: ', newStrg)
        }
    }
    return newStrg;
}

console.log(dedupe("Snaps! crackles! pops!"))
console.log(dedupe('Back in June we delivered oxygen equipment of the same size.'))

function uniqueOnly(string){
    //look at each character
    var newString = "";
    var dupeString = "";
    for(i=0; i<string.length; i++){
        var duplicate = false;
        // console.log('string[i] = ',string[i])
        for (j=i+1; j<string.length; j++){
            // console.log('string[j] = ',string[j])
            if(string[i] == string[j]){
                duplicate = true;
                dupeString += string[i];
                break;
            }
        }
        // console.log('newString = ',newString)
        for (k=0; k<dupeString.length; k++){
            // console.log('newString[k] = ',newString[k])
            if(string[i] == dupeString[k]){
                duplicate = true;
                break;
            }
        }
        if(duplicate == false){
            newString += string[i];
        }
    }
    return newString;
}

console.log(uniqueOnly('Snap! Crackle! Poop!'))
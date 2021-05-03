function bracesValid(string){
    let i=0, parenOpenCount=0, parenCloseCount=0, bracketOpenCount=0, bracketCloseCount=0, braceOpenCount=0, braceCloseCount=0;

    while(i<string.length && parenOpenCount >= parenCloseCount && bracketOpenCount >= bracketCloseCount && braceOpenCount >= braceCloseCount){
        // console.log(string[i])
        if (string[i] == '(')
            parenOpenCount += 1 
        if (string[i] == ')')
            parenCloseCount += 1 
        if (string[i] == '[')
            bracketOpenCount += 1 
        if (string[i] == ']')
            bracketCloseCount += 1 
        if (string[i] == '{')
            braceOpenCount += 1 
        if (string[i] == '}')
            braceCloseCount += 1         
        i += 1
    }
    if (parenOpenCount == parenCloseCount && bracketOpenCount == bracketCloseCount && braceOpenCount == braceCloseCount)
        answer = "Valid"
    else
        answer = "Invalid"
    return answer
}

console.log(bracesValid("[]{}()"))
console.log(bracesValid("{[()]}"))
console.log(bracesValid("{{}}}}}}"))
console.log(bracesValid("]"))
console.log(bracesValid(""))
console.log(bracesValid("{}[()]}"))
console.log(bracesValid("{][()]}"))
console.log(bracesValid("[]{}()(((("))
// isPalindrome(input)
// input is a string
// output is true if the string forms a palindrome and false otherwise
// (the boolean true, not the string "true")
// for the purposes of this function, we're considering spaces,
// punctuation, etc. for determining if a palindrome is valid or not
// "racecar" -> true
// "Racecar" -> false
// "race car" -> false
// "tacocat" -> true
// "abba" -> true
// "abbba" -> true
// "abb ... bba" -> true
// "a" -> true (?)
// "" -> true
// "literally anything that is not a palindrome" -> false
// suggestion: no need to use .split()
// note: don't use .reverse()

// function isPalindrome(input) {

// }

// longestPalindrome(input)
// input is a string
// return the longest substring inside your input that is a palindrome
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "qwerttttttreqwerewy" -> "erttttttre"
// "abacabd" -> "aba" or "aca"
// "abcde" -> "a" or "e", but probably "a"
// "a" -> "a" (lol)
// "racecar" -> "racecar"
// "I like to drive the racecar extremely fast" -> "e racecar e"
// suggestion: don't use your previous isPalindrome function
// suggestion: .substring() ... ?

// function longestPalindrome(input) {

// }


function isPalindrome(input){
    for (i=0; i<Math.floor(input.length/2); i++){
        if(input[i] != input[input.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("RacecaR"))


// function longPallindrome(input){
//     oldPalindrome = ""
//     newPalindrome = ""
//     for (i=0; i<input.length-1; i++){
        
//     }
// }

// RYAN'S FUNCTION
function longestPalindrome(input) {
    if (input.length == 0) {
      return "";
    }
  
    // if input length is 1
    if (input.length == 1) {
      return input;
    }
  
    var result = input[0]; //just in case we find nothing,like an input of "abc"
  
    for (var i = 0; i < input.length; i++) {
      var left = 0;
      var right = 0;
      //determine if we have a string of idential characters
      //i.e. a trivial palindrome
      while (input[i - 1 - left] == input[i]) {
        left++;
      }
      while (input[i + 1 + right] == input[i]) {
        right++;
      }
      // such as: "qwerttttttreqwerewy"
  
      //now check for non-trivial palindromes
      while (input[i - 1 - left] == input[i+ 1 + right]) {
        if (input[i - 1 - left] === undefined && input[i+ 1 + right] === undefined) {
          console.log("entire string is palindrome");
          //special case here - entire string is a palindrome
          //just return the input
          return input;
        }
        left++;
        right++;
      }
      //we have a potential longest palindrome -
      //check it against the current longest
      potential = input.slice(i - left, i + right + 1);
      if (potential.length > result.length) {
        result = potential;
      }
    }
    
    return result;
  }
//My summary/articulation:  Address contraints at beginning;  then loop through entire string.  
//At each increment, i, check to the left and right for equality/palindrome, incrementing outward from i, via while loop;  
//after while loop finds end of equality/palindrome check length.  
//I believe the while loop will automatically terminate when the boundary of the string is encountered.  Can the code be reduced/refactored by eliminating the first while loops checking for identical characters?  

  
  // inefficient example
  function longestPalindrome2(string) {
      var longest = string[0]
      for(var i = 0; i <= string.length-1; i++){
          for(var j = 0; j<= string.length-1; j++){
  
              var check = string.slice(i,j+1)
              if(isPalindrome(check) && check.length > longest.length){
                  longest = check;
              }
          }
      }
      return longest
  }
  
  // Lucky's example
  //I understand it as:  look for palindrom, working from outsides, repeatedly looping
  function longestPalindrome3(input) {
      var sub_str = ""
      if (input.length == 0 || input.length == 1) { return input}
  
      for (let sub_len = input.length - 1; sub_len > 1; sub_len--) {
          for (let start = 0; start < input.length - sub_len; start++) {
              sub_str = input.substring(start,start + sub_len - 1)
              if (isPalindrome(sub_str)) {
                //how does this work??  have to pull in Lucky's code... from Discord...
                  return sub_str;
              }
          }
      }
  }
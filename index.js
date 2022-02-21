function reverse(word) {
  const wordArray = word.split("");
  const reversedArray = wordArray.reverse();
  return reversedArray.join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  write a function that returns true if the given string is a palindrome
  and false if it isn't. 
  if the input is the same as the reversed input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("mom", isPalindrome("mom"))
  console.log("a",isPalindrome("a"))
  console.log("empty", isPalindrome(""))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("palindrome", isPalindrome("palindrome"))
  console.log("Mom", isPalindrome("Mom"))
}

module.exports = isPalindrome;

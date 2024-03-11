/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str
    .toLowerCase()
    .split(" ")
    .join("")
    .replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, "");

  if (str.length === 0 || str.length === 1) {
    return true;
  }

  if (str.length % 2 == 0) {
    const str1 = str
      .slice(str.length / 2)
      .split("")
      .sort()
      .join("");
    const str2 = str
      .slice(0, str.length / 2)
      .split("")
      .sort()
      .join("");
    return str1 === str2;
  } else {
    const str1 = str
      .slice(str.length / 2 + 1)
      .split("")
      .sort()
      .join("");
    const str2 = str
      .slice(0, str.length / 2)
      .split("")
      .sort()
      .join("");
    return str1 === str2;
  }
}

module.exports = isPalindrome;

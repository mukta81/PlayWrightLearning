let myString = "Never odd or even"
let revString = getReverseString(myString);
checkPalindrome(myString, revString)

function getReverseString(str) {
  revStr='';
  strArr = str.split("")
  for (let index = strArr.length-1; index >=0; index--) {
    revStr=revStr+strArr[index]
  }
  //console.log(revStr)
  return revStr;
}

function checkPalindrome(str, revStr) {
   if (str.toLowerCase().replaceAll(" ","") === revStr.toLowerCase().replaceAll(" ","")) {
    console.log(str + ": is a palindrome")
  }
  else {
    console.log(str + ": is not a palindrome")
  }
}

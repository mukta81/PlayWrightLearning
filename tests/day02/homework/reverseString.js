let myString = "Never odd or even"
let revString = getReverseString(myString);
checkPalindrome(myString, revString)

function getReverseString(str) {
  console.log("inside getReverseString " + str)
  str = str.split("")
  return "hello" //temporary
}

function checkPalindrome(str, revStr) {
  console.log("inside palindrome " + str +","+revStr)
  if (str == revStr) {
    console.log(str + ": is a palindrome")
  }
  else {
    console.log(str + ": is not a palindrome")
  }
}





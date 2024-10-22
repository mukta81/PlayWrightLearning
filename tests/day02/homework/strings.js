let s =  " fly me to the moon "
getLengthOfLastword(s)

function getLengthOfLastword(str){
  strArr=str.trim().split(" ")
let lastWord=strArr[strArr.length-1]
console.log(`The last word is '${lastWord}' and its length is ${lastWord.length}.`)
}
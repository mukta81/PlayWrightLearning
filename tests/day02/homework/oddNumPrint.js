function printOddNumbers(start, end){
for(let i=start; i<=end;i++)
{
  if(i%2!=0)
  {
    console.log(i)
  }
}

}

let startNum=1
let endNum=25
printOddNumbers(startNum,endNum)
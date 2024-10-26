const nums = [2,4,5,2,1,2,5];
let k=5
let count=0

let value = countOccurence(nums,k)
console.log(`${k} occured in the array [${nums}]: ${value} times`)

function countOccurence(array, checkNum){
for(let i =0; i<array.length;i++)
{
if(array[i]==checkNum)
{
  count=count+1;
}
}
return count;
}
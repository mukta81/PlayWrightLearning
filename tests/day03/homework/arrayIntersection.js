let arr1 = [2, 4, 15, 2, 4];
let arr2 = [2, 14, 5, 12, 14, 5, 7];
let resultArray = intersection(arr1, arr2);
console.log("Final Intersection Array:" + resultArray);

function intersection(array1, array2) {
  let finalArray1 = uniqueElement(array1);
  let finalArray2 = uniqueElement(array2);

  for (let i = 0; i < finalArray1.length; i++) {
    let flag = false;
    for (let j = 0; j < finalArray2.length; j++) {
      if (finalArray2[j] == finalArray1[i]) {
        flag = true;
        break;
      }
    }
    if (flag == false) {
      finalArray2.push(finalArray1[i]);
    }
  }
  return finalArray2;
}

function uniqueElement(array) {
  let newArray = [];
  array = array.sort((a, b) => a - b);
  newArray.push(array[0]);

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const nums = [2, 4, 7, 8, 11, 14, 16];
const target = 18;
returnMatchingTargets(nums, target);

function returnMatchingTargets(array, addition) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == addition) {
        console.log(`Value: ${array[i]} + ${array[j]} (indices: ${i},${j})`);
      }
    }
  }
}

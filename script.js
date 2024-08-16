const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (const num of arr) {
    // If adding the current number would exceed the max sum n
    if (currentSum + num > n) {
      // Add the current subarray to result and start a new one
      result.push(currentSubarray);
      currentSubarray = [];
      currentSum = 0;
    }

    // Add the number to the current subarray and update the sum
    currentSubarray.push(num);
    currentSum += num;
  }

  // Add the last subarray if it's not empty
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10);
const result = divide(arr, n);
alert(JSON.stringify(result));

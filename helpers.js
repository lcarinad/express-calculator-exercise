class Response {
  constructor(operation, value) {
    this.operation = operation;
    this.value = value;
  }
}

function arrNums(strOfNums) {
  const nums = strOfNums.nums.split(",");
  let intNums = nums.map(Number);
  return intNums;
}

function mean(nums) {
  let sum = nums.reduce(function (accum, nextVal) {
    return accum + nextVal;
  });
  let meanValue = sum / nums.length;
  return meanValue;
}

function median(nums) {
  const sorted = nums.sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } else {
    return sorted[middle];
  }
}

function mode(numbers) {
  const frequencyMap = {};

  // Count the frequency of each number
  numbers.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  let maxFrequency = 0;
  let modes = [];

  // Find the maximum frequency
  for (const num in frequencyMap) {
    const frequency = frequencyMap[num];
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      modes = [parseInt(num)];
    } else if (frequency === maxFrequency) {
      modes.push(parseInt(num));
    }
  }

  return modes;
}

module.exports = {
  response: Response,
  mean: mean,
  arrNums: arrNums,
  median: median,
  mode: mode,
};

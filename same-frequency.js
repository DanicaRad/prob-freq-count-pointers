// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  if(num1.length !== num2.length) return false;
  const num1Count = freqCounter(num1);
  const num2Count = freqCounter(num2);
  for(let num in num1Count) {
    if(!num2Count[num]) return false;
    if(num1Count[num] !== num2Count[num]) return false;
  }
  return true;
}

function freqCounter(nums) {
  const numCount = {};
  for(let num of nums.toString()) {
    numCount[num] = (numCount[num] + 1) || 1;
  }
  return numCount;
}

module.exports = sameFrequency;
// add whatever parameters you deem necessary
function countPairs(nums, num) {
  const numsMap = new Map();
  let pairsCount = 0;
  for(let n of nums) {
    numsMap.set(n, n)
  }
  for(let n of nums) {
    if(numsMap.has(num - n) && num  - n !== n) pairsCount +=1;
    numsMap.delete(n)
  }
  return pairsCount;
}

module.exports = countPairs;
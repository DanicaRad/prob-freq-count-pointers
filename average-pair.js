// add whatever parameters you deem necessary
function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    const avg = (arr[left] + arr[right]) / 2;
    if(avg === target) return true;
    if(avg > target) right --;
    left ++;
  }
  return false;
}

module.exports = averagePair;
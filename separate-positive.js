// add whatever parameters you deem necessary
function separatePositive(arr) {
  let idx = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      let posInt = arr[i];
      arr.splice(i, 1);
      arr.splice(idx, 0, posInt);
      idx ++;
    }
  }
  return arr;
}

module.exports = separatePositive;
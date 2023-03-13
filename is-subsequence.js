// add whatever parameters you deem necessary

function isSubsequence(str1, str2) {
  if(str1.length > str2.length) return false;
  const str2IdxMap = charIdx(str2);
  let idx = -1;
  for(let char of str1) {
    if(!str2IdxMap.has(char)) return false;
    if(str2IdxMap.get(char).length === 0) return false;
    let charIdx = str2IdxMap.get(char).shift();
    if(charIdx < idx) return false;
    idx = charIdx;
  }
  return true;
}


function charIdx(str) {
  const charsIdx = new Map();
  for(let i=0; i < str.length; i++) {
    if(charsIdx.has(str[i])) {
      charsIdx.get(str[i]).push(i);
    } else {
    charsIdx.set(str[i], [i]);
    }
  }
  return charsIdx;
}

module.exports = isSubsequence;
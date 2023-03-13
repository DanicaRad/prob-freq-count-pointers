// add whatever parameters you deem necessary
function constructNote(msg, chars) {
  const msgCharCount = charCounter(msg);
  const charsCount = charCounter(chars);
  for(let key in msgCharCount) {
    if(!charsCount[key]) return false;
    if(charsCount[key] < msgCharCount[key]) return false;
  }
  return true;
}

function charCounter(str) {
  const charCount = {};
  for(let char of str) {
    char = char.toLowerCase();
    charCount[char] = (charCount[char] + 1) || 1;
  }
  return charCount;
}

module.exports = constructNote;
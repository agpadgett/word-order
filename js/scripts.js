var standardizeText = function(userText) {
    userText = userText.toLowerCase();
    return userText.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}

var splitStringIntoWordArray = function(userText){
  var textArray = userText.split(" ");
  return textArray;
}

var addsToHashObject = function(wordArray){
  var hashMap = {};
    for(var i = 0; i < wordArray.length; i++){
      var word = wordArray[i];
      if(hashMap[word] === undefined){
        hashMap[word] = 1; //for some reason, you can't use dot notation here. hashMap.word = 1 will give an error. Dots work everywhere else
      } else {
        hashMap[word] += 1;
      }
  }
  return hashMap;
}

var sortsByValue = function(hashObject){
  var sorted = [];
  for (var word in hashObject) {
      sorted.push([word, hashObject[word]]);
      sorted.sort(function(a, b) {return b[1] - a[1]});
  }
  return sorted;
}

var countWords = function(userText) {
  var standardizedText = standardizeText(userText);
  var wordArray = splitStringIntoWordArray(standardizedText);
  var hashMap = addsToHashObject(wordArray);
  var sortedWordArray = sortsByValue(hashMap);
  return sortedWordArray;
}

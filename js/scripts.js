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

describe('standardizeText', function() {
  it("Removes uppercase letters and puctuation", function() {
    expect(standardizeText("Normally, both your butts would be dead as fried chicken")).to.equal("normally both your butts would be dead as fried chicken");
  });
});

describe('splitStringIntoWordArray', function() {
  it("Splits text into array of substrings", function() {
    expect(splitStringIntoWordArray("normally both your butts would be dead as fried chicken")).to.eql(["normally", "both", "your", "butts", "would", "be", "dead", "as", "fried" ,"chicken"]);
  });
});

describe('addsToHashObject', function(){
  it("Makes words into keys in an object", function(){
    expect(addsToHashObject(["normally", "both", "your", "butts", "would", "be", "dead", "as", "fried" ,"chicken"]).normally).to.equal(1);
  });
});

describe('addsToHashObject', function(){
  it("Will increment the value if a word already exists", function(){
    expect(addsToHashObject(["normally", "normally", "your", "butts", "normally", "be", "dead", "as", "fried" ,"chicken"]).normally).to.equal(3);
  });
});

describe('sortsByValue', function(){
  it("will sort by value", function(){
    var hashObject = {'your':1, 'normally':3};
    expect(sortsByValue(hashObject)).to.eql([["normally", 3], ['your', 1]]);
  });
});

describe('countWords', function(){
  it("Will return an array of words and their counts", function(){
    expect(countWords("Normally, both your butts would be dead as fried chicken , butts, butts, both")[0]).to.eql(['butts', 3]);
    expect(countWords("Normally, both your butts would be dead as fried chicken , butts, butts, both")[1]).to.eql(['both', 2]);
  });
});

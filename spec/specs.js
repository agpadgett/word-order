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

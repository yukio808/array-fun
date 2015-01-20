/*Arguments:
array (Array): The array to query.
target (*): The value to check for.

Description
Checks if a given value is present in a collection using strict equality for comparisons*/
var arrayfun = require ('../arrayfun');
  

describe("arrayfun", function() {
  it("must have a function named cont()", function(){
    expect(arrayfun.cont).toBeDefined();
  });
  it("should check if value is in collection ", function() {
    var test_array = [5, 6, 7];
    var result = arrayfun.cont (test_array, 5);
    expect(result).toBe(true);
  });
  
  it("should return false if number is not in collectionc", function() {
    var test_array = [7, 5, 6];
    var result2 = arrayfun.cont (test_array, 44);
      expect(result2).toBe(false);
  });
  
  //it("and has a positive case", function() {
 //   expect(true).toBe(true);
 //});
 // it("and has a negative case", function () {
  //  expect(false).not.toBe(true);
  //});
});

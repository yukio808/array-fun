/*Arguments
array (Array): The array to query.

Description
Retrieves the minimum value of a collection. 
If the collection is empty or falsey Infinity is returned. */
var arrayfun = require ('../arrayfun');

describe("arrayfun", function() {
  
  it("function must return the minimum element of the argument (array)", function() {
    var test_array2 = [0, 6, 8 , 1, 7, 5, 10] ;
    var result = arrayfun.min(test_array2);
      expect (result ).toBe(0);

    var result2 = arrayfun.min(test_array2);
      expect (result2).toEqual(0);
    });
});

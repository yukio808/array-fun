/*array (Array): The array to query.

Description
Retrieves the maximum value of a collection.
If the collection is empty or falsey -Infinity is returned.*/
var arraymax = require ('../arrayfun');

describe("arraymax", function() {
  
  it ("Must have a function named max()", function(){
    expect(array.max ).toBe(9);
  });
  it("first() function must return the minimum element of the argument (array)", function() {
    var test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];

    var result = arraymax.max(test_array);
      expect (result ).toBe(9);

    var result2 = arraymax.max(test_array);
      expect (result2).toEqual([8]);
  });
});
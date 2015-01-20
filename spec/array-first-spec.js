// Arguments
// array (Array): The array to query.
// [n] (Number): 

// Description
// Gets the first element or first n elements of an array. 
var arrayfirst = require ('../arrayfun');

describe("arrayfun", function() {

 it("must have a function named first()", function(){
    expect(arrayfirst.first ).toBeDefined();
  });
  it("first() function must return the first element of the first argument (array)", function() {
    var test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];

    var result = arrayfirst.first(test_array);
      expect (result).toBe(1);
      console.log(result);

    var result2 = arrayfirst.first(test_array, 2);
      expect (result2 ).toEqual([1, 2]);
      console.log (result2);
  });
});

// status : done and tested with no problems got back what was epected.
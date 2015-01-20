/*Arguments
array (Array): The arrays to query.

Description
Creates a duplicate-value-free version of an array using strict equality for comparisons.*/
var arrayfun = require ('../arrayfun');

describe("arrayfun", function() {
  it ("must be a function named uniq()", function(){
    expect (arrayfun.uniq).toBeDefined();

  });
  it ("must take an array and weed out all the duplicates", function(){
    expect (arrayfun.uniq).toBeDefined();
    var test_array = [1 ,2 ,1 ,3 ,2 ];
    var result1 = arrayfun.uniq (test_array);
    expect(result1).toEqual([1, 2, 3]);

    var test_array2 = [1, 3, 2, 4, 2, 4, 1 ,5 ];
    var result2 = arrayfun.uniq (test_array2);
    expect(result2).toEqual([1, 2, 3 ,4 ,5]);
  });
});
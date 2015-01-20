/*array (Array): The array to query.

Description
Retrieves the maximum value of a collection.
If the collection is empty or falsey -Infinity is returned.*/
var arrayfun = require ('../arrayfun');

describe("testing the max function", function() {
  it (" expect function to be named max", function() {
    expect(arrayfun.max).toBeDefined();
  });

  it("function must return the maximum element of the argument (array)", function() {
    var test_array = [1, 2, 3, 4, 5, 6, 7, 8, 90 ];

    var result = arrayfun.max(test_array);
      expect (result ).toBe(90);
  });
});

//status : tested complete works took out the naem array requiorement.
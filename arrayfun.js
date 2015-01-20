module.exports = {
  first : function(array, n) {
    if (n === undefined ){
      return array[0];
    }else if(arguments.length === 2){
      result1 = array.slice(0, n);
      return result1;
    }
  },

    max : function (array) {
     //var arraym = .map();
      var arraymax = Math.max.apply(null, array);
      return arraymax;
    
  },

    min : function (array) {
     // var arraymin = .map();
      var arraymin = Math.min.apply(null, array);
      console.log(arraymin);
      return arraymin;

  },
    cont : function (array, target){
      for(i = 0; i < array.length; i++){
        if(array[i]=== target) {
          return true; 
        }
      }
      return false;
  }
};

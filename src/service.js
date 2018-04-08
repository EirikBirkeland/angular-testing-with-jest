angular.module('mathmodule', [])
  .factory('mathservice', function() {

    const addTwoNumbers = function(x, y){
      return x + y;
    };

    return {
      addTwoNumbers
    };
  });

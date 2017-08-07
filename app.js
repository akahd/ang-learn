// IIFE: immediately effective function
(function (){
  // protect
  'use strict';

  // this module has been bound to the whole html -- bound the ng-app to the most outer tag
  angular.module('myFirstApp', [])
  // inside the div tag is controlled by the controller
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope) {
    $scope.userinput = "";
    $scope.message = "";

    $scope.respond = function (){
      var response = "";
      var num = countFood($scope.userinput);
      console.log(num);
      if (num > 3) {
        response = "Too Much";
      } else if (num == -1){
        response = "Please enter data first";
      } else {
        response = "Enjoy!!";
      }
      $scope.userinput = "";
      $scope.message = response;
    }

    function countFood(string) {
      string.trim();
      if (string.length === 0) {
        return -1;
      }
      console.log("|" + string + "|");
      var re = /\s*,\s*/;
      var arr = string.split(re).map( function(item) {
        console.log("item:" + item + ";");
        if (item.match(/\S+/g)) {
          return item;
        }
      });
      return arr.length;
    }
  };
})();

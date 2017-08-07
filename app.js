// IIFE: immediately effective function
(function (){
  // protect
  'use strict';

  // this module has been bound to the whole html -- bound the ng-app to the most outer tag
  angular.module('myFirstApp', [])
  // inside the div tag is controlled by the controller
  .controller('myFirstController', function($scope){
    //$scope: reserved for angularjs
    $scope.name = "akahd";
    $scope.totalValue = 0;

    $scope.count = function(){
      var totalNameValue = calculate($scope.name);
      $scope.totalValue = totalNameValue;
    };

    function calculate(string) {
      var sum = 0;
      for (var i = 0; i < string.length; i++) {
        sum += string.charCodeAt(i);
      }
      return sum;
    };

  });
})();

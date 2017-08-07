(function(){
  'use strict';

  angular.module('DIApp',[])

  .controller('dicontroller', function($scope, $filter){
    $scope.name = "akahd";
    $scope.value="123";

    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }
  });

})();

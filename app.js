(function (){
  'use strict';

  angular.module('MyTraining', [])
      .controller('MyTrainingController', MyTrainingController)
      MyTrainingController.inject=['$scope'];
      function MyTrainingController($scope){
        
        $scope.name= "m3mol";
        $scope.stateOfBeing="BadAss";

        $scope.sayHello = function(){
          return "Gear 5 nikka " ; 
        };

      $scope.killFeed= function(){
      $scope.stateOfBeing="gear 5";

      }
      }
    

})();

  
          
         
(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope']; 
  
  function LunchCheckController($scope){
    $scope.lunchitems="";
    $scope.message="";
    $scope.checkLunch=function(){
    	var arr=$scope.lunchitems.split(',');
    	var noOfitems=arr.length;
        if($scope.lunchitems=="")
        {
        	$scope.message="Please enter data first";
        }
        else if(noOfitems<=3)
        {
        	$scope.message="Enjoy!";
        }
        else
        {
        	$scope.message="Too much!";
        }
    };
  }
})();
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
    	var noOfitems=0;
      for(var i=0;i<arr.length;i++)
      {
        var c=arr[i].trim(); //Here the trim method is used to reduce "   " to ""
       
        if(c!="")
        {
          noOfitems=noOfitems+1;
        }
      }
        if($scope.lunchitems=="" || noOfitems==0)
        {
        	$scope.mssgcolor="red";
          $scope.inpborder="2px solid red";
          $scope.message="Please enter data first";
        }
        else if(noOfitems>0 && noOfitems<=3)
        {
        	$scope.mssgcolor="green";
          $scope.inpborder="2px solid green";
          $scope.message="Enjoy!";
        }
        else
        {
        	$scope.mssgcolor="green";
          $scope.inpborder="2px solid green";
          $scope.message="Too much!";
        }
    };
  }
})();


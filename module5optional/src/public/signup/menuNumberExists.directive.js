(function(){
	'use strict';

	angular.module("public").
	directive('menuNumberExists',['$http','$q',function($http,$q){
	return {
	     require: "ngModel",
	     link: function(scope,element,attrs,ngModel){
	        ngModel.$asyncValidators.menuNumberExists=function(modelValue, viewValue){
               return $http({method: 'GET',
                             url: ("https://mrinal1998-dev-course5.herokuapp.com/menu_items/" + viewValue + ".json")
                           })
                      .then(function(response){
                             
                              return true;
                      },function(error){
                              
                              return $q.reject();
                      });
	        };
	     }
	};
	}]);
})();
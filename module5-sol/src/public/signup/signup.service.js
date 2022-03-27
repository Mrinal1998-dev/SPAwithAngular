(function(){
	'use strict';
	angular.module("public")
	.service('signUpService',signUpService);

     signUpService.$inject=["$http"];
	function signUpService($http){
		var service = this;
		service.userInfo= null;
		service.itemInfo=null;

		service.getmenuItem=function(shortName){
           return $http({method:'GET',
                         url: ("https://mrinal1998-dev-course5.herokuapp.com/menu_items/"+shortName+".json")
                     });
		};
	}
})();
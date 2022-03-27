(function(){
	'use strict';
	angular.module("public")
	.controller('SignUpController',SignUpController);
	

	SignUpController.$inject=['signUpService'];
	function SignUpController(signUpService){
		var signCtrl = this;
		signCtrl.user={
			            firstname: "",
			            lastname: "",
			            email: "",
			            phone: "",
			            favourite: ""
		};
		signCtrl.invalidItem = false;
		signCtrl.valid = false;
		signCtrl.submit=function(){
            var promise = signUpService.getmenuItem(signCtrl.user.favourite);
            promise.then(function(response){
                 signUpService.userInfo=signCtrl.user;
                 signUpService.itemInfo=response.data;
                 signCtrl.invalidItem=false;
                 signCtrl.valid=true;
            },function(error){
                 signCtrl.invalidItem=true;
                 signCtrl.valid=false;
            });
		};
	}
	
})();
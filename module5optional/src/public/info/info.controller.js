(function(){
	'use strict'
	angular.module("public")
	.controller("InfoController",InfoController);

	InfoController.$inject=["signUpService"];
	function InfoController(signUpService){
		var infoCtrl=this;
		infoCtrl.user=signUpService.userInfo;
		if(infoCtrl.user===null){
            infoCtrl.UserRegistered=false;
		}
		else{
            infoCtrl.item=signUpService.itemInfo;
			infoCtrl.UserRegistered=true;
		}
	}
})();
(function(){
  'use strict';
  angular.module("MenuApp")
  .component('items',{
  	 templateUrl:'src/MenuApp/itemscomponent.template.html',
     bindings:{
     	itemsArray:'<'
     }
  });
})();
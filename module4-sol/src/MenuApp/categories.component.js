(function(){
  'use strict';
  angular.module('MenuApp')
  .component('categories',{
  	templateUrl:'src/MenuApp/categorycomponent.template.html',
  	bindings:{
  		catArray:'<'
  	}
  });
})();
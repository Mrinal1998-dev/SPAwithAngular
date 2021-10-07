(function(){
  'use strict';
  angular.module('MenuApp')
  .controller('ItemsController',ItemsController);

  ItemsController.$inject=['items'];
  function ItemsController(items){
  	var menuitems=this;
    menuitems.itemsArray=items.data.menu_items;
    menuitems.catName=items.data.category.name;
  }
})();
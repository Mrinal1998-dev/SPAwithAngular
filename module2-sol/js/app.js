(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
     var buylist=this;
     buylist.message="";
     buylist.items=ShoppingListCheckOffService.getbuyitems();
     buylist.buyitem=function(index){
        ShoppingListCheckOffService.addItemtoBoughtlist(buylist.items[index]);
        ShoppingListCheckOffService.removeItemfromBuylist(index);
        if(buylist.items.length==0){
           buylist.message="Everything is bought!";
        }
     }
  }
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
      var boughtlist=this;
      boughtlist.message="Nothing bought yet";
      ShoppingListCheckOffService.obj=boughtlist;
      boughtlist.items=ShoppingListCheckOffService.getboughtitems();
  }
  function ShoppingListCheckOffService(){
  	var service=this;
  	service.obj="";
  	var buylist=[{name:"cookies",
  	              quantity:10},
  	              {name:"chips packets",
  	              quantity:8},
  	              {name:"soap bars",
  	              quantity:5},
  	              {name:"chocolates",
  	              quantity:2},
  	              {name:"Milk Cartons",
  	              quantity:2},
  	              {name:"Cereal Boxes",
  	              quantity:4}];
  	
  	var boughtlist=[];
  	service.getbuyitems=function(){
       return buylist;
  	};
  	service.getboughtitems=function(){
       return boughtlist;
  	};
  	service.addItemtoBoughtlist=function(item){
       boughtlist.push(item);
       service.obj.message="";
  	};
  	service.removeItemfromBuylist=function(index){
       buylist.splice(index,1);
  	};
  	
  }
})();
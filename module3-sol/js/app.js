(function(){
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',foundItems);
  function foundItems(){
  	var ddo={templateUrl:"narrowedlist.html",
             scope:{itemsList:"<",
                    message:"<",
                    onRemove:"&"
                    }
             };
  	return ddo;
  }
  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
  	var list=this;
  	list.searchTerm="";
  	list.message=false;
  	list.NarrowDownList=function(searchTerm){
       list.loading="LOADING...";
       var promise=MenuSearchService.getMatchedMenuItems(searchTerm);
       promise.then(function(result){
       	list.loading="";
       	list.found=result;
       	list.message=false;
       }).catch(function(result){
           list.loading="";
           list.found=result;
           list.message=true;
       });
  	};
  	list.removeItem=function(index){
        list.found.splice(index,1);
  	};
  }

  MenuSearchService.$inject=['$http','$q','$timeout'];
  function MenuSearchService($http,$q,$timeout){
  	
  	var service=this;
  	
  	service.getMatchedMenuItems=function(searchTerm){
        var promise=$http({method:"GET",url:("https://davids-restaurant.herokuapp.com/menu_items.json")});
        return promise.then(function(response){
      	   var menuItemsObj=response.data;
           var menuItemsList=menuItemsObj.menu_items;
           var foundItemsPromise=filterMenuList(searchTerm,menuItemsList);
           return foundItemsPromise;
           });
      };
  	
  	function filterMenuList(searchTerm,menuItemsList){
        	var deferred=$q.defer();
        	
        	var foundItemsList=[];
        	if(searchTerm!==""){
        	 for(var i=0;i<menuItemsList.length;i++){
               if(menuItemsList[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1){
               	 var item={name:menuItemsList[i].name,
               	           short_name:menuItemsList[i].short_name,
               	           description:menuItemsList[i].description};
               	  foundItemsList.push(item);
               }
        	  }
            }
            
            $timeout(function(){
              if(searchTerm==="" || foundItemsList.length===0){
              	
              	deferred.reject(foundItemsList);
              }
              else{
              	deferred.resolve(foundItemsList);
              }
            },4000);
            return deferred.promise;
        }
  }
})();
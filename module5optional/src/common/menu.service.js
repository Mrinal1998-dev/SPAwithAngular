(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
        var catArray= response.data;
        for(var i=0;i<catArray.length;i++){
          if(catArray[i].short_name==="F"){
             catArray[i].name="Meat";
          }
        }
        return catArray;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
         var obj =response.data;
         if(obj.category.short_name==="F"){
          obj.category.name="Meat";
         }
         return obj;
    });
  };

}



})();

(function(){
   'use strict';
   angular.module('MenuApp')
   .config(RoutesConfig);

   RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
   function RoutesConfig($stateProvider,$urlRouterProvider){
    
     $urlRouterProvider.otherwise('/');

     $stateProvider
       .state('home', {
         url: '/',
         templateUrl: 'src/MenuApp/home.template.html'
       })

       .state('categories', {
         url: '/categories',
         templateUrl: 'src/MenuApp/categories.template.html',
         controller: 'CategoriesController as menucategories',
         resolve: {
           categories: ['MenuDataService', function (MenuDataService) {
             return MenuDataService.getAllCategories();
           }]
         }
       })

       .state('items', {
         url: '/items/{categoryShortName}',
         templateUrl: 'src/MenuApp/items.template.html',
         controller: 'ItemsController as menuitems',
         resolve:{
           items:['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
           	 return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
           }]
         }
       });
   }
})();
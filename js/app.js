'use strict'

angular.module('app',
                [
                    'ui-notification',
                    'ngSanitize', 
                    'ui.select',
                    'ui.router'
                ]
).config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/")
      
      $stateProvider
        .state('recipes', {
            url: "/",
            templateUrl: "pages/recipes.html"
        })        
        .state('newRecipe', {
            url: "/newRecipe",
            templateUrl: "pages/recipe.template.html",
            resolve:{
                notification: function(Notification){
                    console.log('notification',Notification);
                     return Notification;
                },
                beerRecipes: function(){
                    return 'BeerRecipes';
                }
            },
            controller: "beerRecipeCtrl"
            
        })
});
        


angular.module('app')
        .controller('beerRecipeCtrl',['$scope','Notification','BeerRecipes',function($scope,Notification,BeerRecipes){ 
            $scope.recipe = {};
            $scope.beerStyles = BeerRecipes.getBeerStyles();
            $scope.grains =  BeerRecipes.getIngredientsByType('grain');
            $scope.hops = BeerRecipes.getIngredientsByType('hop');
            $scope.yeasts = BeerRecipes.getIngredientsByType('yeast');
            $scope.extras = BeerRecipes.getIngredientsByType('extra');
            $scope.saveRecipe = function(){
                BeerRecipes.addRecipe($scope.recipe);
                Notification.success('Recipe successfully saved');
                $scope.recipes = BeerRecipes.getRecipes();
            };
            $scope.isResetEnabled = function(){

            };
            $scope.isSavedEnabled = function(){

            };
            $scope.resetRecipe = function(){
                
            };
            
        }]);
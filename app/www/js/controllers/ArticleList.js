angular.module('starter.controllers')
    .controller('ArticleList', function($scope, $http, $stateParams, Articles) {

        $scope.data = {
            articles: {}
        };

        $scope.stateParams = $stateParams;
        console.log($stateParams);

        var getArticles = function(articles) {
            $scope.data.articles = articles;
        };
        Articles.get($scope.stateParams.ressort,$scope.stateParams.subressort,getArticles);

        //$scope.load();


    });
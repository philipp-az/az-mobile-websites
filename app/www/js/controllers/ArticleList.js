angular.module('starter.controllers')
    .controller('ArticleList', function($scope, $http, $stateParams, Articles) {

        $scope.data = {
            articles: {}
        };

        $scope.stateParams = $stateParams;
        console.log($stateParams);

        var getArticles = function(articles) {

            //add interferers
            for (i=0;i<articles.length;i++) {
                articles[i].text = articles[i].text.replace('<!-- interferer -->','#################TEMP: INTERFERER GOES HERE######################');
            }

            $scope.data.articles = articles;
        };
        Articles.get($scope.stateParams.ressort,$scope.stateParams.subressort,getArticles);

        //$scope.load();


    });
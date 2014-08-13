angular.module('starter.controllers')
    .controller('ArticleList', function($scope, $http, $stateParams) {

        $scope.data = {
            articles: {}
        };

        $scope.stateParams = $stateParams;
        console.log($stateParams);

        $scope.load = function() {
            //$scope.ui.loading=true;


            var url = 'http://www.aargauerzeitung.ch/';
            if ($scope.stateParams.ressort) {
                url+=$scope.stateParams.ressort+'/';
            }
            if ($scope.stateParams.subressort) {
                url+=$scope.stateParams.subressort+'/';
            }
            url+='/frontpage.json';


            $http({method: 'GET', url: url})
                .success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available

                    //console.log(data);

                    $scope.data.articles = data;

                    //$scope.ui.loading=false;
                })
                .error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.

                    //$scope.ui.loading=false;
                });
        };

        $scope.load();


    });
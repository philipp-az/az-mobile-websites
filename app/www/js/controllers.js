angular.module('starter.controllers', [])

.controller('Menu', function($scope, $ionicModal, $timeout) {

})

.controller('ArticleList', function($scope, $http) {

    $scope.data = {
        articles: {}
    };


    $scope.load = function(ressort) {
        //$scope.ui.loading=true;

        $http({method: 'GET', url: 'http://www.aargauerzeitung.ch/'+ressort+'/frontpage.json'})
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

    $scope.load('ausland');


})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

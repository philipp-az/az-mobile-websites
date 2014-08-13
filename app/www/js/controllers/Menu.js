angular.module('starter.controllers')
    .controller('Menu', function($scope, $ionicModal, $timeout,  $stateParams) {
        $scope.data = {
            ressorts: [
                {path:'aargau', name:'Region', children: [{path:'baden', name:'Baden'},{path:'aarau', name:'Aarau'}]}
                ,{path:'ausland', name:'Ausland'}
                ,{path:'sport', name:'Sport'}
            ]
        };

    })
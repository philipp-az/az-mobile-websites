angular.module('starter')
    .service('Articles', function($http) {

        this.articles = ['John', 'James', 'Jake'];

        this.get = function(ressort,subressort,cb) {

            var url = document.location.protocol+'//www.aargauerzeitung.ch/';
            if (ressort) {
                url+=ressort+'/';
            }
            if (subressort) {
                url+=subressort+'/';
            }
            url+='frontpage.json';
            //console.log(url);

            $http({method: 'GET', url: url})
                .success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    cb(data);

                    //$scope.ui.loading=false;
                })
                .error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.

                    //$scope.ui.loading=false;
                });

        };

    });
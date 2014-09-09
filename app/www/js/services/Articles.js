angular.module('starter')
    .service('Articles', function($http) {

        this.get = function(ressort,subressort,cb) {

            /*var url = document.location.protocol+'//www.aargauerzeitung.ch/';
            if (ressort) {
                url+=ressort+'/';
            }
            if (subressort) {
                url+=subressort+'/';
            }
            url+='frontpage.json';
            //console.log(url);
            */

            //var reg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;
            //var pathname = reg.exec( document.location.href )[1];


            var r = /[^\/]*$/;
            var path = document.location.pathname.replace(r, '');
            //console.log(path);

            var url = document.location.protocol+'//'+document.location.host+path+'js/data/';
            console.log(ressort);
            if (ressort) {
                url+=ressort;
            } else {
                url+='home';
            }
            if (subressort) {
                url+='.'+subressort;
            }
            url+='.json';
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
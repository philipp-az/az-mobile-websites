angular.module('starter.controllers')
    .controller('ArticleList', function($scope, $http, $stateParams, Articles) {

        $scope.data = {
            articles: {}
        };

        $scope.stateParams = $stateParams;
        //console.log($stateParams);

        $scope.dummyClick = function(str) {
            alert('dummyClick '+str+'!');
        };

        var getArticles = function(articles) {

            //add interferers
            for (i=0;i<articles.length;i++) {

                //working: dynamic directives test
                var replaceTxt = '<div ng-repeat="b in data.articles">{{b.title}} <div ng-click="dummyClick(b.title)" ng-repeat="c in data.articles">{{$index}} DUMMY CLICK FOR TITLE</div></div><div ng-click="dummyClick(a.title)">DUMMY CLICK HERE</div>#################TEMP: INTERFERER GOES HERE######################';


                //working: angular carousel
                /*var carouselHTML = '<ul rn-carousel class="image">'
                    +'<li ng-style="{ backgroundImage: \'url(http://static.a-z.ch/__ip/avlRtwwSISSYhniuEfvppHFGf08/b4ccc90c53237e3ba596ad54c04be0d02d30defc/teaser-max/grosser-rat-in-aarau)\' }">'
                +'<div class="layer">Bild 1</div>'
                +'    </li>'
                +'<li ng-style="{ backgroundImage: \'url(http://static.a-z.ch/__ip/avlRtwwSISSYhniuEfvppHFGf08/b4ccc90c53237e3ba596ad54c04be0d02d30defc/teaser-max/grosser-rat-in-aarau)\' }">'
                +'    <div class="layer">Bild 2</div>'
                +'</li>'
                +'</ul>';*/
                var carouselHTML = '<ul rn-carousel class="image">'
                    +'<li ng-style="{ backgroundImage: \'url(http://static.a-z.ch/__ip/avlRtwwSISSYhniuEfvppHFGf08/b4ccc90c53237e3ba596ad54c04be0d02d30defc/teaser-max/grosser-rat-in-aarau)\' }">'
                    +'<div class="layer"><img ng-src="http://static.a-z.ch/__ip/avlRtwwSISSYhniuEfvppHFGf08/b4ccc90c53237e3ba596ad54c04be0d02d30defc/teaser-max/grosser-rat-in-aarau"></div>'
                    +'    </li>'
                    +'<li ng-style="{ backgroundImage: \'url(http://static.a-z.ch/__ip/avlRtwwSISSYhniuEfvppHFGf08/b4ccc90c53237e3ba596ad54c04be0d02d30defc/teaser-max/grosser-rat-in-aarau)\' }">'
                    +'    <div class="layer"><img ng-src="http://static.a-z.ch/__ip/avlRtwwSISSYhniuEfvppHFGf08/b4ccc90c53237e3ba596ad54c04be0d02d30defc/teaser-max/grosser-rat-in-aarau"></div>'
                    +'</li>'
                    +'</ul>';
                var replaceTxt = carouselHTML+'#################TEMP: INTERFERER GOES HERE######################';


                /*
                //not working: dynamic ion slide box
                replaceTxt = '<ion-slide-box >'
                                    +'<ion-slide>'
                                    +'<div class="box blue" style="background-color:blue"><h1>DYNAMIC SLIDE 1</h1></div>'
                                    +'</ion-slide>'
                                    +'<ion-slide>'
                                    +'<div class="box blue" style="background-color:blue"><h1>DYNAMIC SLIDE 2</h1></div>'
                                    +'</ion-slide>'
                                +'</ion-slide-box>';*/
                /*
                 //working
                replaceTxt = '<ion-slide-box >'
                                +'<ion-slide>'
                                +'<div class="box blue" style="background-color:blue"><h1>DYNAMIC SLIDE 1</h1></div>'
                                +'</ion-slide>  '
                                +'</ion-slide-box>';*/

                //TRY INSTEAD OF ION BOX SLIDE:
                //http://blog.revolunet.com/angular-carousel/

                articles[i].text = articles[i].text.replace('<!-- interferer -->',replaceTxt);

            }

            $scope.data.articles = articles;
        };
        Articles.get($scope.stateParams.ressort,$scope.stateParams.subressort,getArticles);

        //$scope.load();


    });
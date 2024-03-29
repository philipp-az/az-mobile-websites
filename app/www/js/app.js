// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'
                            //, 'ui.bootstrap'
                            , 'angular-carousel'
                            , 'starter.controllers'
                            , 'ngCookies'
                            , 'ngResource'
                            , 'ngSanitize'
                            , 'ngRoute'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'Menu'
    })


    .state('app.frontpagehome', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/articleList.html",
          controller: 'ArticleList'
        }
      }
    })

    .state('app.articlesub', {
      url: "/:ressort/:subressort/:articleTitle-:articleId",
      views: {
          'menuContent' :{
              templateUrl: "templates/article.html",
              controller: 'ArticleList'
          }
      }
    })
    .state('app.article', {
          url: "/:ressort/:articleTitle-:articleId",
          views: {
              'menuContent' :{
                  templateUrl: "templates/article.html",
                  controller: 'ArticleList'
              }
          }
    })
    .state('app.frontpagesub', {
      url: "/:ressort/:subressort",
      views: {
          'menuContent' :{
              templateUrl: "templates/articleList.html",
              controller: 'ArticleList'
          }
      }
    })
    .state('app.frontpagemain', {
      url: "/:ressort",
      views: {
          'menuContent' :{
              templateUrl: "templates/articleList.html",
              controller: 'ArticleList'
          }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});


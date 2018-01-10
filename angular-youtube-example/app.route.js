(function() {
  var router = angular.module('radioRouter', ['ui.router', 'oc.lazyload']);
  router.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('home', {
      url: '/home',
      data: {
        pageTitle: 'WebRadio'
      },
      templateUrl: 'components/home/index.view.html',
      controller: 'HomeController as homeCtrl',
      resolve: {
        loadMyDirectives: function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'webRadioHome',
            files: [
              'components/home/index.controller.js'
            ]
          })
        }
      }
    })
  })
});

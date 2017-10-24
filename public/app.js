(function() {
  angular
    .module('park', ['appRoutes', 'ngMaterial', 'LocalStorageModule', 'ngMap', 'ngAnimate'])
    .config(function($mdThemingProvider) {
      // $mdThemingProvider.theme('default')
      //   .primaryPalette('indigo')
      //   .accentPalette('blue-grey');
      // $mdThemingProvider.theme('default').foregroundPalette[3] = "rgb(255, 255, 255)";

    })
})();

(function(){
	'use strict'
	angular
		.module('appRoutes', ['ui.router', 'oc.lazyLoad', 'ngMessages', 'angularCSS'])
		.config(configuration);

	configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configuration($stateProvider, $urlRouterProvider){
		$stateProvider

		.state('landing',{
			url: '/Home',
			templateUrl: './components/landing/landing.html',
			css: './css/style.css',
			// resolve: {
			// 	load: ['$ocLazyLoad', function($ocLazyLoad){
			// 		return $ocLazyLoad.load('./components/landing/landing.controller.js')
			// 	}]
			// },
			// controller: 'landingController',
			// controllerAs: 'ctrl'
		})

		$urlRouterProvider.otherwise('/Home');
	}
  };
})();
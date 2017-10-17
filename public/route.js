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

		.state('activity',{
			url: '/Activity',
			templateUrl: './components/activity/activity.html',
			css: './css/style.activity.css',
			// resolve: {
			// 	load: ['$ocLazyLoad', function($ocLazyLoad){
			// 		return $ocLazyLoad.load('./components/activity/activity.controller.js')
			// 	}]
			// },
			// controller: 'activityController',
			// controllerAs: 'ctrl'
		})

		.state('reserve',{
			url: '/Reserve',
			templateUrl: './components/reserve/reserve.html',
			css: './css/style.reserve.css',
			// resolve: {
			// 	load: ['$ocLazyLoad', function($ocLazyLoad){
			// 		return $ocLazyLoad.load('./components/reserve/reserve.controller.js')
			// 	}]
			// },
			// controller: 'reserveController',
			// controllerAs: 'ctrl'
		})

		$urlRouterProvider.otherwise('/Home');
  };
})();
(function(){
	'use strict'
	angular
		.module('appRoutes', ['ui.router', 'oc.lazyLoad', 'ngMessages', 'angularCSS', 'ngAnimate'])
		.config(configuration);

	configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configuration($stateProvider, $urlRouterProvider){
		$stateProvider

		.state('landing',{
			url: '/Home',
			templateUrl: './components/landing/landing.html',
			css: './css/layout.css',
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
			resolve: {
				load: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('./components/reserve/reserve.controller.js')
				}]
			},
			controller: 'reserveController',
			controllerAs: 'ctrl'
		})

		.state('gallery',{
			url: '/gallery',
			templateUrl: './components/gallery/gallery.html',
			css: './css/galleryStyle.css'
		})

		.state('information',{
			url: '/Information',
			templateUrl: './components/information/information.html',
			css: './css/layout.css'
		})
		$urlRouterProvider.otherwise('/Home');
  };
})();


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
			css: './css/layout.css'
		})

		.state('activity',{
			url: '/Activity',
			templateUrl: './components/activity/activity.html',
			css: './css/style.activity.css'
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


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

		.state('gallery',{
			url: '/gallery',
			templateUrl: './components/gallery/gallery.html',
			css: './css/galleryStyle.css'
		})
		$urlRouterProvider.otherwise('/Home');
	};
})();

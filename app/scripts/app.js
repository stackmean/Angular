'use strict';

/**
 * @ngdoc overview
 * @name marketApp
 * @description
 * # marketApp
 *
 * Main module of the application.
 */
angular
  .module('marketApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.router'
  ])
  
  .config(function($stateProvider, $urlRouterProvider){
  
  
	$urlRouterProvider.otherwise('/profile');
	$stateProvider	
		.state('main',{
			url: "/",
			views :{
				'viewA':{
					templateUrl: 'views/main.html',
					controller: 'MainCtrl'
				},
				'viewB':{
					templateUrl: 'views/profile.html',
					controller: 'ProfileCtrl'
				}
			}			
		})
		.state('main.usastates', {			
			 url: "/usastates",
			 templateUrl: 'views/usastates.html',
			 controller: 'UsaStateCtrl'
		})
		.state('customdirective', {			
			url: "/customdirective",
			templateUrl: 'views/customdirective.html',
			controller: 'CustomDirCtrl'
		})
		.state('productdirective', {			
			url: "/productdirective",
			templateUrl: 'views/product.html',
			controller: 'ProductCtrl'
		})
		.state('productequaldirective', {			
			url: "/productequaldirective",
			templateUrl: 'views/productequal.html',
			controller: 'ProductCtrl'
		})
		.state('productampersanddir', {			
			url: "/productampersanddir",
			templateUrl: 'views/productampersand.html',
			controller: 'ProductCtrl'
		})
		.state('productinheriteddir', {			
			url: "/productinheriteddir",
			templateUrl: 'views/productinherited.html',
			controller: 'ProductCtrl'
		})
		.state('topevent',{
			url:'/topevent',
			templateUrl:'views/event1.html',
			controller: 'EventCtrl1'
		})
		.state('topevent.middleevent',{
			url:'/middleevent',
			templateUrl:'views/event2.html',
			controller: 'EventCtrl2'
		})
		.state('topevent.middleevent.bottomevent',{
			url:'/bottomevent',
			templateUrl:'views/event3.html',
			controller: 'EventCtrl3'
		})
		.state('productfilter',{
			url:'/productfilter',
			templateUrl:'views/productfilter.html',
			controller:'ProductCtrl'
		})
		.state('restrictionelement',{
			url:'/restrictionelement',
			templateUrl:'views/restrictionelement.html',
			controller:'RestrictionCtrl'
		})
		.state('levelOne',{
			url:'/levelOne',
			templateUrl:'views/compileandlink1.html',
			controller: 'CompileAndLinkCtrl1'
		})	
		.state('Trans',{
			url:'/Trans',
			templateUrl:'views/transclusion.html'
		})
		
})
  
  
  // .config(function ($routeProvider) {
    // $routeProvider
      // .when('/', {
        // templateUrl: 'views/main.html',
        // controller: 'MainCtrl',
        // controllerAs: 'main'
      // })
      // .when('/about', {
        // templateUrl: 'views/about.html',
        // controller: 'AboutCtrl',
        // controllerAs: 'about'
      // })
      // .otherwise({
        // redirectTo: '/'
      // });
  // });

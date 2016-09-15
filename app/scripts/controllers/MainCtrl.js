'use strict';

/**
 * @ngdoc function
 * @name marketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marketApp
 */
angular.module('marketApp')
  .controller('MainCtrl', ['$scope', '$state', function ($scope, $state) {			
		$state.go('main.usastates')
		
		$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
		];						
		
  }]);

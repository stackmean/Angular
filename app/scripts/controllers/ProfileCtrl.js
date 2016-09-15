'use strict';

/**
 * @ngdoc function
 * @name marketApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the marketApp
 */
angular.module('marketApp')
  .controller('ProfileCtrl', ['$scope', '$state', function ($scope, $state) {
		$scope.myProfile = 'Developer';	
		
	}]);

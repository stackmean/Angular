angular.module('marketApp')
  .controller('UsaStateCtrl', ['$scope', 'UsaStates', function ($scope, UsaStates) {							
		$scope.UsaStates = UsaStates;
  }]);
angular.module('marketApp')
	.controller('EventCtrl1', ['$scope', '$state', function ($scope, $state) {
		
		$state.go('topevent.middleevent')
		
		$scope.onclick = function(evt){			
			$scope.$broadcast("SendDown","some data from broadcast");
		}
		$scope.$on("SendDown", function(evt, data){
			$scope.message = "Inside SendDown handler of EventCtrl1 : " + data;
		})
		$scope.$on("SendUp", function(evt, data){
			$scope.message = "Inside SendUp handler of EventCtrl1 : " + data;
		})	
	}])
	.controller('EventCtrl2', ['$scope', '$state', function ($scope, $state) {
		
		$state.go('topevent.middleevent.bottomevent')

		$scope.$on("SendDown", function(evt, data){
			$scope.message = "Inside SendDown handler of EventCtrl2 : " + data;
		})
		$scope.$on("SendUp", function(evt, data){
			$scope.message = "Inside SendUp handler of EventCtrl2 : " + data;
		})

	}])
	.controller('EventCtrl3', ['$scope', function ($scope) {
		$scope.onclick = function(evt){
			$scope.$emit("SendUp","some data from emit");
		}
		$scope.$on("SendDown", function(evt, data){
			$scope.message = "Inside SendDown handler of EventCtrl3 : " + data;
		})
		$scope.$on("SendUp", function(evt, data){
			$scope.message = "Inside SendUp handler of EventCtrl13 : " + data;
		})
	}])
	
	
	//http://www.binaryintellect.net/articles/5d8be0b6-e294-457e-82b0-ba7cc10cae0e.aspx
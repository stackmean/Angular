angular.module('marketApp')	
	.controller('CompileAndLinkCtrl1', ['$scope', function($scope){		
		$scope.name = 'sunil pant'
	}])
	.controller('RestrictionCtrl', ['$scope', function($scope){		
	}])
	.controller('CustomDirCtrl', ['$scope', function($scope){
		$scope.name;
	}])
	.controller('ProductCtrl',['$scope',function($scope){
		$scope.product1 = {
			name: 'Phone',
			price: '100',
			stock: true
		};
		$scope.product2 = {
			name: 'TV',
			price: '1000',
			stock: false
		};
		$scope.product3 = {
			name: 'Laptop',
			price: '800',
			stock: false
		}; 
		
		$scope.customer = {
			name: 'David',
			street: '1234 Anywhere St.'
		};
		
		
		$scope.customers = [
			{
				name: 'David',
				street: '1234 Anywhere St.'
			},
			{
				name: 'Tina',
				street: '1800 Crest St.'
			},
			{
				name: 'Michelle',
				street: '890 Main St.'
			}
		];

		$scope.changeData = function () {		
			$scope.customer = {
				name: 'James',
				street: '1000, Cedar Point St.'
			};
		};

		$scope.ShowData = function () {
			alert("Display Data");
		}		
	}])
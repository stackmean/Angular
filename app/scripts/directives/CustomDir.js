angular.module('marketApp')
	.directive('customDir',function(){
		return {
			replace: false,
			restrict: 'E',
			template: '<h3>Your name is {{name}}</h3>',
		}
	})
	.directive('productDir', function(){
		return{
			restrict: 'E',
			scope: {
				name: '@',
				price:'@'
			},
			template: '<br/>Directive Product Name : <input type="text" ng-model="name"><br/>Directive Product Price : <input type="text" ng-model="price"></br>{{name}} costs {{price}}'
		}
	})
	.directive('productEqualDir', function(){
		return{
			restrict:'E',
			scope:{
				customer:'='
			},
			template: '<br/>Directive Customer Name : <input type="text" ng-model="customer.name"></br>Directive Customer Street : <input type="text" ng-model="customer.street"></br><ul><li ng-repeat="prop in customer">{{ prop }}</li></ul>'

		}
	})
	.directive('productAmpersandDir', function(){
		return{
			restrict:'E',
			scope:{
				customer:'=',
				action:'&'
			},
			template: '<br/>Directive Customer Name : <input type="text" ng-model="customer.name"></br>Directive Customer Street : <input type="text" ng-model="customer.street"></br><ul><li ng-repeat="prop in customer">{{ prop }}</li></ul><br/><button ng-click="action()">Change Data</button>'
		}		
	})
	.directive('productInheritedDir', function(){
		return{
			restrict:'EA',
			scope:true,
			template: '<br/>Directive Customer Name : <input type="text" ng-model="customer.name"></br>Directive Customer Street : <input type="text" ng-model="customer.street"></br><ul><li ng-repeat="prop in customer">{{ prop }}</li></ul>'

		}
	})
	
	
	
		
	
	//http://timothymartin.azurewebsites.net/angularjs-directives/
	
	//http://www.infragistics.com/community/blogs/dhananjay_kumar/archive/2015/06/11/understanding-scopes-in-angularjs-custom-directives.aspx
	
	//http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-2-isolate-scope
	
	//https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
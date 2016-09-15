angular.module('marketApp')
	.directive('myCardDir',function(){
		return {
			scope : {
				title: '=myTitle',
				content: '@myContent'
			},
			template : '<h2>{{title}}</h2> {{content}}'
		}
	})
	.directive('myCardTransclusionDir',function(){
		return {
			scope : {
				title: '=myTitle'				
			},
			transclude : true,
			template : '<h2>{{title}}</h2> <div class="content"></div>',
			link : function(scope, el, attrs, ctrl, transclude){
				el.find('.content').append(transclude());
			}
		}
	})
	
	.directive('myCardTransclusionUsingDirectiveDir',function(){
		return {
			scope : {
				title: '=myTitle'				
			},
			transclude : true,
			template : '<h2>{{title}}</h2> <div my-content-transclusion-point></div> '
		}
	})
	.directive('myContentTransclusionPoint',function(){
		return {			
			link : function(scope, el, attrs, ctrl, transclude){
				el.append(transclude());
			}
		}
	})
	
	.directive('myCardTransclusionUsingNgTranscludeDir',function(){
		return {
			scope : {
				title: '=myTitle'				
			},
			transclude : true,
			template : '<h2>{{title}}</h2> <div ng-transclude></div>'
		}
	})
	
	.directive('myCardTransclusionUsingCloneDir',function(){
		return {
			scope : {
				title: '=myTitle'				
			},
			transclude : true,
			template : '<h2>{{title}}</h2> <div my-content-clone-transclusion-point></div> <div my-content-clone-transclusion-point></div>'
		}
	})
	
	.directive('myContentCloneTransclusionPoint',function(){
		return {			
			link : function(scope, el, attrs, ctrl, transclude){
				transclude(function(transcludeEl){
					el.append(transcludeEl);
				})				
			}
		}
	})
	
	.directive('myCard', function() {
		return {
			scope: {},
			controllerAs: 'ctrl',
			bindToController: {
				title: '=myTitle'
			},
			template:'<h2>Every time we call the transclusion function, a transclusion scope is created for us. But when we empty the transcluded content, Angular has no way of knowing it should now destroy that transclusion scope, so it doesn not. (BELOW)</br></br><button ng-if="!ctrl.expanded" ng-click="ctrl.expand()">EXPAND</button><button ng-if="ctrl.expanded" ng-click="ctrl.collapse()">COLLAPSE</button>{{ctrl.title}}</h2><div class="content"></div>',
			transclude: true,
			controller: function($element, $transclude) {
			
				var ctrl = this;
				var content = $element.find('.content'); 
				var transcludedScope;
				
				ctrl.expand = function() {
					$transclude(function(transEl, transScope) {
						content.append(transEl);
						transcludedScope = transScope;
					});
					ctrl.expanded = true;
				};
				
				ctrl.collapse = function() {
					transcludedScope.$destroy();
					transcludedScope = null;
					content.empty();
					ctrl.expanded = false;
				};
			}
		};
	})
	
	.directive('myElementTranscluder', function() {
		return {
			transclude: 'element',
			link: function(scope, el, attr, ctrl, transclude) {
				console.log('el', el[0]);
				//el.append(transclude());
				el.after(transclude());
				//el.after(transclude());
			}
		};
	});
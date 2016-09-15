angular.module('marketApp')
	.directive('elementDir',function(){
		return {			
			restrict: 'ECMA',
			link: function(){
				alert('Restriction Types --> Element, Class, Comment, Attribute')
			}
		}
	})
	.directive('levelOneDir', function(){return {
		restrict: 'E',
		compile: function(tElem, tAttrs){
			console.log('levelOne: compile' + tElem.html());
			return {
				pre: function(scope, iElem, iAttrs){					
					console.log('levelOne: pre link' +  iElem.html());
				},
				post: function(scope, iElem, iAttrs){					
					console.log('levelOne: post link' +  iElem.html());
				}
			}
		}
	}})
	.directive('levelTwoDir', function(){return {
		restrict: 'E',
		compile: function(tElem, tAttrs){
			console.log('levelTwo: compile' + tElem.html());
			return {
				pre: function(scope, iElem, iAttrs){					
					console.log('levelTwo: pre link' +  iElem.html());
				},
				post: function(scope, iElem, iAttrs){					
					console.log('levelTwo: post link' +  iElem.html());
				}
			}
		}
	}})
	.directive('levelThreeDir', function(){return {
		restrict: 'E',
		compile: function(tElem, tAttrs){
			console.log('levelThree: compile' + tElem.html());
			return {
				pre: function(scope, iElem, iAttrs){					
					console.log('levelThree: pre link' +  iElem.html());
				},
				post: function(scope, iElem, iAttrs){					
					console.log('levelThree: post link' +  iElem.html());
				}
			}
		}
	}})
	
	
	
function createDirective(name){  
  return function(){
    return {
      restrict: 'E',
      compile: function(tElem, tAttrs){
        console.log(name + ': compile');
        return {
          pre: function(scope, iElem, iAttrs){
            console.log(name + ': pre link');
          },
          post: function(scope, iElem, iAttrs){
            console.log(name + ': post link');
          }
        }
      }
    }
  }
}
	
	
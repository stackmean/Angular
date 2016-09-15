angular.module('marketApp')
	.filter('MUpperCase', function(){
		return function(item){
			return item.toUpperCase();
		}
	})
	.filter('StartsWithD', function(){
		return function(items){
			var filtered = [];
			// loop through existing Array
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				// check if the individual Array element begins with `a` or not
				if (/d/i.test(item.name.substring(0, 1))) {
				// push it into the Array if it does!
				filtered.push(item);
				}
			}
			// boom, return the Array after iteration's complete
			return filtered;
		}
	})
	.filter('StartsWithLetter', function(){
		return function(items, letter){
			var filtered = [];
			var letterMatch = new RegExp(letter, 'i');
			// loop through existing Array
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				// check if the individual Array element begins with `a` or not
				if (letterMatch.test(item.name.substring(0, 1))) {
				// push it into the Array if it does!
				filtered.push(item);
				}
			}
			// boom, return the Array after iteration's complete
			return filtered;
			
		}
	})
	
	
	//https://toddmotto.com/everything-about-custom-filters-in-angular-js/
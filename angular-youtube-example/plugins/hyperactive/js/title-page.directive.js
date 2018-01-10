(function() {
	angular.module("hyperactive.angular.utils").directive('updateTitle',function($rootScope, $timeout) {
		return {
		      link: function(scope, element) {

		        var listener = function(event, toState) {

		          var title = 'SGE';
		          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

		          $rootScope.pageTitle =  title;
		          
		        };

		        $rootScope.$on('$stateChangeSuccess', listener);
		      }
		    };

	});
})();
(function() {
	angular.module("hyperactive.angular.utils").directive('access',
			function(authenticationService) {
				return {
					restrict : 'A',
					link : function($scope, element, attrs) {
						var roles = attrs.access.split(',');
						if (roles.length > 0) {
							if (!authenticationService.autorizado(roles)) {
								element.addClass("disabled");	
								element.attr("disabled", "disabled");
							}
						}
					}
				};
			});
	
	angular.module("hyperactive.angular.utils").directive('accessView',
			function(authenticationService) {
				return {
					restrict : 'A',
					link : function($scope, element, attrs) {
						var roles = attrs.accessView.split(',');
						if (roles.length > 0) {
							if (!authenticationService.autorizado(roles)) {
								element.hide();
							}
						}
					}
				};
			});
})();

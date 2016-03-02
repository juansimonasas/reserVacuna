'use strict';

app.controller('mainCtrl', ['$location', '$scope', function($location, $scope) {
	activate();
    
    function activate() {
        console.log('mainCtrl is activated');
        $location.path("/"); 
    };
}]);
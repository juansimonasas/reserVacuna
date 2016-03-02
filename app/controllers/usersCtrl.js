'use strict';

app.controller('usersCtrl', ['$scope', 'usersFactory', function($scope, usersFactory) {

    $scope.addUser = function() {
        console.log($scope.users);
        var userData = {            
            name : $scope.userName,
            lastname : ''
        };        
        if(usersFactory.addUser(userData) == 'Added'){
            $scope.users.push(userData);            
        }
    };
    
    function init(){
        if(usersFactory.users.length == 0){
            $scope.users = usersFactory.getAllUsers();
        }
        else {
            $scope.users = usersFactory.users();
        }
    };
    
    init();
}]);

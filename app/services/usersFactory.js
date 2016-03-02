'use strict';

app.factory('usersFactory', ['$http', function($http){
    var usersFactory = {};    
    var urlBase = '/api/users';
    var usersIds = [];
    
    usersFactory.users = [];
        
    usersFactory.getAllUsers = function(){        
        $http.get(urlBase)
        .success(function (data) {
            usersFactory.users.splice(0, usersFactory.users.length);
            usersIds.splice(0, usersIds.length);
            angular.forEach(data, function(item){                
                usersFactory.users.push(item);
                usersIds.push(item.id);
            });                                
        })
        .error(function(error) {
            console.log(error.message);
        });                 
        return usersFactory.users;
    };        
    
    usersFactory.getUser = function(id){        
        return $http.get(urlBase + '/' + id);
    };
    
    usersFactory.addUser = function (user) {
        $http.put(urlBase, user)
        .success(function () {                
            usersFactory.users.push(user);
            return 'Added';
        })
        .error(function(error) {
            return error.message;
        });                
    };

    usersFactory.updateUser = function (user) {
        return $http.post(urlBase + '/' + user.id, user)
    };
    
    return usersFactory;
}]);
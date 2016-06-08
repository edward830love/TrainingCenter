angular.module('app').factory('mvUser', function($resource) {
    var UserResoucre = $resource('/api/users/:id', {_id: "@id"});

    UserResoucre.prototype.isAdmin = function() {
        return this.roles && this.roles.indexOf('admin') > -1;
    }

    return UserResoucre;
});

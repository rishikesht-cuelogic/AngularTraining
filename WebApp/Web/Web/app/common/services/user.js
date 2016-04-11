angular.module('user.service', [])
       .service('userService', [userService]);

function userService() {

    var db = new Database();
    var service = {};
    service.get = get;
    service.authenticate = authenticate;
    service.setCurrentUser = setCurrentUser;
    service.getCurrentUser = getCurrentUser;
    return service;


    function get() {
        return db.users;
    }

    function authenticate(username, password) {
        for (var i = 0; i < db.users.length; i++) {
            var user = db.users[i];
            if (user.email == username && user.password == password) {
                setCurrentUser(user.name, user.email);
                return true;
            }
        }
        return false;
    }

    function setCurrentUser(name, email) {
        sessionStorage.name = name;
        sessionStorage.email = email;
    }

    function getCurrentUser() {
        return {
            email: sessionStorage.email,
            name: sessionStorage.name
        };
    }

    function clearSession() {
        sessionStorage.name = "";
        sessionStorage.email = "";
    }
};
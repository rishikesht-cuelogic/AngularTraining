angular.module('user.service', ['provider'])
       .service('userService', ['credentials', 'employees', userService]);

function userService(credentials, employees) {
    var users = employees.get();
    var db = new Database();
    var service = {};
    service.get = get;
    service.authenticate = authenticate;
    service.setCurrentUser = setCurrentUser;
    service.getCurrentUser = getCurrentUser;
    service.addUser = addUser;
    service.updateUser = updateUser;
    service.deleteUser = deleteUser;
    service.getUserById = getUserById;
    service.clearSession = clearSession;
    service.isAuthenticated= isAuthenticated;
    return service;

    

    function get() {
        return users;
    }

    function getUserById(id) {
        var users = get();
        for (var i = 0; i < users.length; i++) {
            if (id == users[i].id)
                return users[i];
        }
    }

    function getMaxUserId() {
        var users = get();
        var id = 0;
        for (var i = 0; i < users.length; i++) {
            if (id < users[i].id)
                id = users[i].id;
        }
        return id + 1;
    }

    function getIndexOfUserId(id) {
        var users = get();
        for (var i = 0; i < users.length; i++) {
            if (id == users[i].id)
                return i;
        }
    }

    function addUser(user) {
        var newId = getMaxUserId();
        var newUser = {
            id: newId,
            name: user.name,
            email: user.email,
            address: user.address,
            password: user.password,
            age: user.age,
            gender: user.gender,
            education: user.education
        };
        users.push(newUser);
    }

    function updateUser(user) {
        var users = get();
        for (var i = 0; i < users.length; i++) {
            if (user.id == users[i].id) {
                users[i].name = user.name;
                users[i].email = user.email;
                users[i].address = user.address;
                users[i].age = user.age;
                users[i].gender = user.gender;
                users[i].education = user.education;
                break;
            }
        }
    }

    function deleteUser(id) {
        var users = get();
        var index = getIndexOfUserId(id);
        users.splice(index, 1);
    }

    function authenticate(username, password) {
        var listCredentials = credentials.get();
        for (var i = 0; i < listCredentials.length; i++) {
            var user = listCredentials[i];
            if (user.username == username && user.password == password) {
                setCurrentUser(user.username);
                return true;
            }
        }
        return false;
    }

    function setCurrentUser(username) {
        var listEmployees = employees.get();
        for (var i = 0; i < listEmployees.length; i++) {
            var user = listEmployees[i];
            if (user.email == username) {
                localStorage.authenticated = true;
                localStorage.name = user.name;
                localStorage.email = username;
                return true;
            }
        }

    }

    function getCurrentUser() {
        return {
            email: localStorage.email,
            name: localStorage.name
        };
    }

    function clearSession() {
        localStorage.name = "";
        localStorage.email = "";
        localStorage.authenticated = false;
    }

    function isAuthenticated() {
        return localStorage.authenticated == "true";
    }
};
angular.module('user.service', ['provider'])
       .service('userService', ['credentials', 'employees', userService]);

function userService(credentials, employees) {

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
    return service;

    

    function get() {
        var users = localStorage.getItem("Users");
        if (!users) {
            var json=JSON.stringify(db.users);
            localStorage.setItem("Users",json);
            return db.users;
        }           

        return JSON.parse(users);
    }

    function getUserById(id) {
        var users = get();
        for (var i = 0; i < users.length; i++) {
            if (id == users[i].id)
                return users[i];
        }
    }

    function save(users) {
        var json = JSON.stringify(users);
        localStorage.setItem("Users", json);
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

    function addUser(name, email, password, address, age, gender, education) {
        var users = get();
        var newId = getMaxUserId();
        var newUser = {
            id: newId,
            name: name,
            email: email,
            address: address,
            password: password,
            age: age,
            gender: gender,
            education: education
        };
        users.push(newUser);
        save(users);
    }

    function updateUser(id, name, email, address, age, gender, education) {
        var users = get();
        for (var i = 0; i < users.length; i++) {
            if (id == users[i].id) {
                users[i].name = name;
                users[i].email = email;
                users[i].address = address;
                users[i].age = age;
                users[i].gender = gender;
                users[i].education = education;
                break;
            }
        }
        save(users);
    }

    function deleteUser(id) {
        var users = get();
        var index = getIndexOfUserId(id);
        users.splice(index, 1);
        save(users);
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
    }
};
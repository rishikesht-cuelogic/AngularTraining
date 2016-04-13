var provider = angular.module('provider', []);

provider.config(function (employeesProvider, credentialsProvider) {
    var db = new Database();
    employeesProvider.set(db.users);
    credentialsProvider.set(db.credentials);
});
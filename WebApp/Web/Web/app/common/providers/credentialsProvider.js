   
provider.provider('credentials', function () {
    this.data = [];
    this.$get = function () {
        var data = this.data;
        return {
            get: function () {
                return data;
            }
        }
    };
    this.set = function (listCredentials) {
        this.data = listCredentials;
    };
});

//Configure provider here          
provider.config(function (credentialsProvider) {
    var db = new Database();
    credentialsProvider.set(db.credentials);
});
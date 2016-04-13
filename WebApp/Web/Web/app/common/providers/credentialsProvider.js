   
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


provider.provider('employees', function () {
    this.data = [];
    this.$get = function () {
        var data = this.data;
        return {
            get: function () {
                return data;
            }
        }
    };
    this.set = function (listEmployees) {
        this.data = listEmployees;
    };
});

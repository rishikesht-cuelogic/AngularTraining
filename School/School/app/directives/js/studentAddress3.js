school.directive('studentAddress3', function () {
    return {
        templateUrl: function (element, attr) {
            return "app/directives/html/studentAddress"+attr.type+".html"
        }
    };
});
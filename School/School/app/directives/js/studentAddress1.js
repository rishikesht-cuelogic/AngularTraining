school.directive('studentAddress1', function () {
    return {
        template: 'State: {{address.state}} City: {{address.city}} Zip:{{address.zip}}'
    };
});
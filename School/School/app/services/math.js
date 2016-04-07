school.service('math', function () {
    this.square = function (number) {
        return number * number;
    }
    this.add = function (number1, number2) {
        return number1 + number2;
    }
});
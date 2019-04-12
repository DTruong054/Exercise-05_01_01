var myApp = angular.module('myApp', []);

// Start of controllers
myApp.controller('RegistrationController', ['$scope', function ($scope) {
    //Putting a function into the scope if this controller
    $scope.register = function () {
        //Giving $scope another name value pair
        $scope.message = "I thank thee f'r thy submission " + $scope.user.firstname;
    }
}]);
app.controller('HomeCtrl', ['$scope', '$http','User', function ($scope, $http,User) {

    $scope.showLogin = true;
    $scope.showRegistration = false;
    $scope.credential = { "email": "", "password": "" };
    $scope.registrationInfo = { "email": "", "password1": "", "password2": "" };
    $scope.login = function () {
        $http.post("service/login.aspx", $scope.credential).success(function (data) {
            User.fullName = data.FullName;
        });
    }
    $scope.register = function () {
        $http.post("service/register.aspx", $scope.registrationInfo).success(function (result) {
            alert(result);
        });
    }
    $scope.showRegister = function () {
        $scope.showLogin = false;
        $scope.showRegistration = true;
    }
    $scope.cancelRegister = function () {
        $scope.showLogin = true;
        $scope.showRegistration = false;
    }

}]);
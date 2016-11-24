// Login Page

angular.module('healthCalculators')
.controller('LoginCtrl', function ($scope, $window) {
  
  $scope.login = function() {
    // Log into Firebase
    console.log('Login Success!');
    $window.location.href = '#/app/bmi-calculator';
  };

});

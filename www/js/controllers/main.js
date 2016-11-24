// Login Page

angular.module('healthCalculators')
  .controller('MainCtrl', function ($scope, $rootScope, $location, $window, loginFactory) {
    
    $scope.signIn = function() {
      loginFactory.signIn();
    };

});

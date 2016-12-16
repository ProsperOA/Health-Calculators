// BMR Calculator Controller

angular.module('healthCalculators')
.controller('HomeCtrl', function ($scope, $ionicModal, loginFactory) {

  // Login Modal
  $ionicModal.fromTemplateUrl('loginModal', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

});

/**
 * @module {Controller} - HomeCtrl
 * @desc   Home Screen Calculator Controller
 * @param  {Object}     $scope       - View data binding
 * @param  {Object}     $ionicModal  - Ionic modal
 * @param  {Controller} loginFactory - Login Controller
 **/

angular.module('healthCalculators')
.controller('HomeCtrl', function ($scope, $ionicModal, loginFactory) {

  // Login Modal
  $ionicModal.fromTemplateUrl('loginModal', {
    scope: $scope,
    animation: 'fade-in-scale'
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

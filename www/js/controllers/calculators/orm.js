/**
 * @module {Controller} OrmCtrl
 * @desc   One Repetition Maximum Calculator Controller
 * @param  {Object}  $scope  - View data binding
 * @param  {Factory} globals - Global variables
 **/
angular.module('healthCalculators')
  .controller('OrmCtrl', function($scope, globals) {
    var oneRepMax;

    /**
     * @function calcOrm
     * @desc     Calculates One Repetition Maximum
     **/
    $scope.calcOrm = function() {
      $scope.setUserData();

      oneRepMax = $scope.user.info.weight_lifted / (1.0278 - (0.0278 * $scope.user.info.reps));
      $scope.user.info.orm = Math.round(oneRepMax) + globals.lbs;

     // angular.forEach(oneRepMaxPercentages, function(val, $key) {
     //  $info.$key = math.round(onerepmax * val) + globals.lbs;
     //   console.log($info.key);
     // });

     // FIXME: D.R.Y.
     // Percentages
     $scope.results.orm_95 = Math.round(oneRepMax * 0.95) + globals.lbs;
     $scope.results.orm_90 = Math.round(oneRepMax * 0.90) + globals.lbs;
     $scope.results.orm_85 = Math.round(oneRepMax * 0.85) + globals.lbs;
     $scope.results.orm_80 = Math.round(oneRepMax * 0.80) + globals.lbs;
     $scope.results.orm_75 = Math.round(oneRepMax * 0.75) + globals.lbs;
     $scope.results.orm_70 = Math.round(oneRepMax * 0.70) + globals.lbs;
     $scope.results.orm_65 = Math.round(oneRepMax * 0.65) + globals.lbs;
     $scope.results.orm_60 = Math.round(oneRepMax * 0.60) + globals.lbs;

      // Repetitions
      $scope.results.orm_1Reps  = Math.round(oneRepMax) + globals.lbs;
      $scope.results.orm_2Reps  = Math.round(oneRepMax * 0.95) + globals.lbs;
      $scope.results.orm_3Reps  = Math.round(oneRepMax * 0.90) + globals.lbs;
      $scope.results.orm_4Reps  = Math.round(oneRepMax * 0.88) + globals.lbs;
      $scope.results.orm_5Reps  = Math.round(oneRepMax * 0.86) + globals.lbs;
      $scope.results.orm_6Reps  = Math.round(oneRepMax * 0.83) + globals.lbs;
      $scope.results.orm_7Reps  = Math.round(oneRepMax * 0.80) + globals.lbs;
      $scope.results.orm_8Reps  = Math.round(oneRepMax * 0.78) + globals.lbs;
      $scope.results.orm_9Reps  = Math.round(oneRepMax * 0.76) + globals.lbs;
      $scope.results.orm_10Reps = Math.round(oneRepMax * 0.75) + globals.lbs;
      $scope.results.orm_11Reps = Math.round(oneRepMax * 0.72) + globals.lbs;
      $scope.results.orm_12Reps = Math.round(oneRepMax * 0.70) + globals.lbs;
      $scope.results.orm_15Reps = Math.round(oneRepMax * 0.66) + globals.lbs;
      $scope.results.orm_20Reps = Math.round(oneRepMax * 0.60) + globals.lbs;

    };

  });

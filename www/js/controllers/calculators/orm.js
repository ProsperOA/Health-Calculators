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
      var $info = $scope.user.info;

      oneRepMax = $info.weight_lifted / (1.0278 - (0.0278 * $info.reps));
      $info.orm = Math.round(oneRepMax) + globals.lbs;

     // angular.forEach(oneRepMaxPercentages, function(val, $key) {
     //  $info.$key = math.round(onerepmax * val) + globals.lbs;
     //   console.log($info.key);
     // });

     // Percentages
     $info.orm_95 = Math.round(oneRepMax * 0.95) + globals.lbs;
     $info.orm_90 = Math.round(oneRepMax * 0.90) + globals.lbs;
     $info.orm_85 = Math.round(oneRepMax * 0.85) + globals.lbs;
     $info.orm_80 = Math.round(oneRepMax * 0.80) + globals.lbs;
     $info.orm_75 = Math.round(oneRepMax * 0.75) + globals.lbs;
     $info.orm_70 = Math.round(oneRepMax * 0.70) + globals.lbs;
     $info.orm_65 = Math.round(oneRepMax * 0.65) + globals.lbs;
     $info.orm_60 = Math.round(oneRepMax * 0.60) + globals.lbs;

      // Repetitions
      $info.orm_1Reps  = Math.round(oneRepMax) + globals.lbs;
      $info.orm_2Reps  = Math.round(oneRepMax * 0.95) + globals.lbs;
      $info.orm_3Reps  = Math.round(oneRepMax * 0.90) + globals.lbs;
      $info.orm_4Reps  = Math.round(oneRepMax * 0.88) + globals.lbs;
      $info.orm_5Reps  = Math.round(oneRepMax * 0.86) + globals.lbs;
      $info.orm_6Reps  = Math.round(oneRepMax * 0.83) + globals.lbs;
      $info.orm_7Reps  = Math.round(oneRepMax * 0.80) + globals.lbs;
      $info.orm_8Reps  = Math.round(oneRepMax * 0.78) + globals.lbs;
      $info.orm_9Reps  = Math.round(oneRepMax * 0.76) + globals.lbs;
      $info.orm_10Reps = Math.round(oneRepMax * 0.75) + globals.lbs;
      $info.orm_11Reps = Math.round(oneRepMax * 0.72) + globals.lbs;
      $info.orm_12Reps = Math.round(oneRepMax * 0.70) + globals.lbs;
      $info.orm_15Reps = Math.round(oneRepMax * 0.66) + globals.lbs;
      $info.orm_20Reps = Math.round(oneRepMax * 0.60) + globals.lbs;

    };

  });

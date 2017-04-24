/**
 * @module {Controller} OrmCtrl
 * @desc   One Repetition Maximum Calculator Controller
 * @param  {Object}  $scope  - View data binding
 * @param  {Factory} globals - Global variables
 **/
angular.module('healthCalculators')
  .controller('OrmCtrl', function($scope, globals) {

    /**
     * @function calcOrm
     * @desc     Calculates One Repetition Maximum
     **/
    $scope.calcOrm = function() {
      var userData = $scope.setUserData();
      var oneRepMax;
      const ORM_VALUES = {
        "orm_95": 0.95,
        "orm_90": 0.90,
        "orm_85": 0.85,
        "orm_80": 0.80,
        "orm_75": 0.75,
        "orm_70": 0.70,
        "orm_65": 0.70,
        "orm_60": 0.60
      };

      const ORM_PERCENTAGES = {
        "orm_1Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0,
        "orm_Reps" : 0
      };

      oneRepMax = $scope.user.info.weight_lifted / (1.0278 - (0.0278 * $scope.user.info.reps));
      $scope.results.orm = Math.round(oneRepMax) + globals.lbs;

       // Repetitions
       angular.forEach(ORM_VALUES, function(val, $key) {
         $scope.results.$key = Math.round(oneRepMax * val) + globals.lbs;

         // DEBUG
         var tmp = (val*100).toString();
         console.log($key+": "+val);
         console.log(tmp+"%: "+$scope.results.$key);
       });

       // Percentages

/*
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
*/

    };

  });

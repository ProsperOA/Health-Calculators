// ORM Calculator Controller

angular.module('healthCalculators')
.controller('OrmCtrl', function ($scope) {
    $scope.calcOrm = function() {
      var $info = $scope.user.info;
      
      if(isNaN($info.weight_lifted, $info.reps))
        return;
      
      var orm = $info.weight_lifted / (1.0278 - (0.0278 * $info.reps));
      
      $info.orm = $info.orm_1Reps = Math.round(orm) + ' lbs';
      // Percentages & Reps
      $info.orm_95 = $info.orm_2Reps = Math.round(orm * 0.95) + ' lbs';
      $info.orm_90 = $info.orm_3Reps = Math.round(orm * 0.90) + ' lbs';
      $info.orm_85 = Math.round(orm * 0.85) + ' lbs';
      $info.orm_80 = $info.orm_7Reps = Math.round(orm * 0.80) + ' lbs';
      $info.orm_75 = $info.orm_10Reps = Math.round(orm * 0.75) + ' lbs';
      $info.orm_70 = $info.orm_12Reps = $info.orm_7Reps = Math.round(orm * 0.70) + ' lbs';
      $info.orm_65 = Math.round(orm * 0.65) + ' lbs';
      $info.orm_60 = Math.round(orm * 0.60) + ' lbs';
      
      // Reps
      $info.orm_4Reps = Math.round(orm * 0.88) + ' lbs';
      $info.orm_5Reps = Math.round(orm * 0.86) + ' lbs';
      $info.orm_6Reps = Math.round(orm * 0.83) + ' lbs';
      $info.orm_8Reps = Math.round(orm * 0.78) + ' lbs';
      $info.orm_9Reps = Math.round(orm * 0.76) + ' lbs';
      $info.orm_11Reps = Math.round(orm * 0.72) + ' lbs';
      $info.orm_15Reps = Math.round(orm * 0.66) + ' lbs';
      $info.orm_20Reps = Math.round(orm * 0.60) + ' lbs';
      
    };
    
});
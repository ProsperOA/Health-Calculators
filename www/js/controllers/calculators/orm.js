// One Repetition Maximum Calculator

angular.module('healthCalculators')
.controller('OrmCtrl', function($scope, globals) {
    $scope.calcOrm = function() {
        var $info = $scope.user.info;

        var orm = $info.weight_lifted / (1.0278 - (0.0278 * $info.reps));
        $info.orm = Math.round(orm) + globals.lbs;

        // Percentages
        $info.orm_95 = Math.round(orm * 0.95) + globals.lbs;
        $info.orm_90 = Math.round(orm * 0.90) + globals.lbs;
        $info.orm_85 = Math.round(orm * 0.85) + globals.lbs;
        $info.orm_80 = Math.round(orm * 0.80) + globals.lbs;
        $info.orm_75 = Math.round(orm * 0.75) + globals.lbs;
        $info.orm_70 = Math.round(orm * 0.70) + globals.lbs;
        $info.orm_65 = Math.round(orm * 0.65) + globals.lbs;
        $info.orm_60 = Math.round(orm * 0.60) + globals.lbs;

        // Repetitions
        $info.orm_1Reps = Math.round(orm) + globals.lbs;
        $info.orm_2Reps = Math.round(orm * 0.95) + globals.lbs;
        $info.orm_3Reps = Math.round(orm * 0.90) + globals.lbs;
        $info.orm_4Reps = Math.round(orm * 0.88) + globals.lbs;
        $info.orm_5Reps = Math.round(orm * 0.86) + globals.lbs;
        $info.orm_6Reps = Math.round(orm * 0.83) + globals.lbs;
        $info.orm_7Reps = Math.round(orm * 0.80) + globals.lbs;
        $info.orm_8Reps = Math.round(orm * 0.78) + globals.lbs;
        $info.orm_9Reps = Math.round(orm * 0.76) + globals.lbs;
        $info.orm_10Reps = Math.round(orm * 0.75) + globals.lbs;
        $info.orm_11Reps = Math.round(orm * 0.72) + globals.lbs;
        $info.orm_12Reps = Math.round(orm * 0.70) + globals.lbs;
        $info.orm_15Reps = Math.round(orm * 0.66) + globals.lbs;
        $info.orm_20Reps = Math.round(orm * 0.60) + globals.lbs;

    };

});


angular.module('healthCalculators', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MainCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
  .state('app.cal-intake', {
    url: '/cal-intake',
    views: {
      'menuContent': {
        templateUrl: 'templates/calculators/cal-intake.html',
        controller: 'Bmr-CalorieCtrl'
      }
    }
  })

  .state('app.bmi', {
    url: '/bmi',
    views: {
      'menuContent': {
        templateUrl: 'templates/calculators/bmi.html',
        controller: 'BmiCtrl'
      }
    }
  })
  
  .state('app.lbm', {
      url: '/lbm',
      views: {
        'menuContent': {
          templateUrl: 'templates/calculators/lbm.html',
          controller: 'LbmCtrl'
        }
      }
    })

  .state('app.ffmi', {
      url: '/ffmi',
      views: {
        'menuContent': {
          templateUrl: 'templates/calculators/ffmi.html',
          controller: 'FfmiCtrl'
        }
      }
    })

  .state('app.bmr', {
      url: '/bmr',
      views: {
        'menuContent': {
          templateUrl: 'templates/calculators/bmr.html',
          controller: 'Bmr-CalorieCtrl'
        }
      }
    })
  
  .state('app.orm', {
      url: '/orm',
      views: {
        'menuContent': {
          templateUrl: 'templates/calculators/orm.html',
          controller: 'OrmCtrl'
        }
      }
    })
  
  .state('app.information', {
      url: '/information',
      views: {
        'menuContent': {
          templateUrl: 'templates/info.html'
        }
      }
    })
  
  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
    });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

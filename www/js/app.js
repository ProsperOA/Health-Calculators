
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
  
  .state('app.calorie-calculator', {
    url: '/calorie-calculator',
    views: {
      'menuContent': {
        templateUrl: 'templates/calorie-calculator.html',
        controller: 'Bmr-CalorieCtrl'
      }
    }
  })

  .state('app.bmi-calculator', {
    url: '/bmi-calculator',
    views: {
      'menuContent': {
        templateUrl: 'templates/bmi-calculator.html',
        controller: 'BmiCtrl'
      }
    }
  })

  .state('app.ffmi-calculator', {
      url: '/ffmi-calculator',
      views: {
        'menuContent': {
          templateUrl: 'templates/ffmi-calculator.html',
          controller: 'FfmiCtrl'
        }
      }
    })

  .state('app.bmr-calculator', {
      url: '/bmr-calculator',
      views: {
        'menuContent': {
          templateUrl: 'templates/bmr-calculator.html',
          controller: 'Bmr-CalorieCtrl'
        }
      }
    })
  
  .state('app.orm-calculator', {
      url: '/orm-calculator',
      views: {
        'menuContent': {
          templateUrl: 'templates/orm-calculator.html',
          controller: 'OrmCtrl'
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

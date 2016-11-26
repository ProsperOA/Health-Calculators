# Health Calculators #
Health Calculators is an all-in-one suite for health and fitness related calculators.

## Prerequisites: ##
  - [Node.js](https://nodejs.org/en/download) >= 6.9.1
  - Cordova CLI >= 4.2.0
  
## Install/Update Ionic and Cordova CLI ##
```sh
  npm install -g cordova ionic
```

## Clone Repository ##
```sh
  git clone https://github.com/ProsperOA/Health-Calculators.git
  cd Health-Calculators
```

## Test app in browser ##
```sh
  ionic serve
```
Health Calculators is running at [http://localhost:8100](http://localhost:8100) by default.

# For iOS Developers #

## Additional Prerequisites: ##
  - Mac
  - Xcode
  
## Install ios-sim and ios-deploy to deploy to iOS applications ##
```sh
  npm install -g ios-sim
  npm install -g ios-deploy
```
(may require sudo)

## Run on iOS Simulator ##
```sh
  ionic platform add ios
  ionic build ios
  ionic emulate ios
```

Take a look at the [Cordova iOS Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios)
and follow the instructions to install or upgrade Xcode, and possibly register
for a developer account to start building apps for iOS.

# For Android Developers #

Take a look at the [Cordova Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android)
and follow the instructions to install the SDK and/or Android Studio to start
building apps for Android.

## License ##
  MIT License - Copyright (c) 2016 Obosa Osagie-Amayo
  
## Ionic ##
  Created with [Ionic](https://ionicframework.com) v1.3.2 "france"
  
## Contributors ##
- [Prosper Osagie-Amayo](https://github.com/ProsperOA)

cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-facebookads.FacebookAds",
      "file": "plugins/cordova-plugin-facebookads/www/FacebookAds.js",
      "pluginId": "cordova-plugin-facebookads",
      "clobbers": [
        "window.FacebookAds"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-extension": "1.5.4",
    "cordova-facebook-audnet-sdk": "4.26.2",
    "cordova-plugin-facebookads": "4.23.2"
  };
});
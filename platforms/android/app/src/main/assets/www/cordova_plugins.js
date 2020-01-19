cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-enhance.Enhance",
      "file": "plugins/cordova-plugin-enhance/www/enhance.js",
      "pluginId": "cordova-plugin-enhance",
      "clobbers": [
        "Enhance"
      ]
    },
    {
      "id": "cordova-plugin-facebookads.FacebookAds",
      "file": "plugins/cordova-plugin-facebookads/www/FacebookAds.js",
      "pluginId": "cordova-plugin-facebookads",
      "clobbers": [
        "window.FacebookAds"
      ]
    },
    {
      "id": "cordova-plugin-mopub.MoPub",
      "file": "plugins/cordova-plugin-mopub/www/MoPub.js",
      "pluginId": "cordova-plugin-mopub",
      "clobbers": [
        "window.MoPub"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-enhance": "3.0.0",
    "cordova-facebook-audience-network": "4.22.1",
    "cordova-plugin-extension": "1.5.4",
    "cordova-facebook-audnet-sdk": "4.26.2",
    "cordova-plugin-facebookads": "4.23.2",
    "cordova-plugin-mopub": "2.4.1"
  };
});
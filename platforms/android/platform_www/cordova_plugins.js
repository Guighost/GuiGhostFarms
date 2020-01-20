cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-fbanfree.FBANFree",
      "file": "plugins/cordova-plugin-fbanfree/www/FBANFree.js",
      "pluginId": "cordova-plugin-fbanfree",
      "clobbers": [
        "fbanfree"
      ]
    },
    {
      "id": "cordova-appodeal-prime.AppodealPrime",
      "file": "plugins/cordova-appodeal-prime/www/appodealprime.js",
      "pluginId": "cordova-appodeal-prime",
      "clobbers": [
        "appodealprime"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-cocoapod-support": "1.6.2",
    "cordova-plugin-fbanfree": "0.0.8",
    "cordova-custom-config": "5.1.0",
    "cordova-appodeal-prime": "1.0.1"
  };
});
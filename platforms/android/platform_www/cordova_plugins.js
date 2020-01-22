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
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-market.Market",
      "file": "plugins/cordova-plugin-market/www/market.js",
      "pluginId": "cordova-plugin-market",
      "clobbers": [
        "cordova.plugins.market"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-cocoapod-support": "1.6.2",
    "cordova-plugin-fbanfree": "0.0.8",
    "cordova-custom-config": "5.1.0",
    "cordova-appodeal-prime": "1.0.1",
    "cordova-plugin-inappbrowser": "3.2.0",
    "cordova-plugin-market": "1.2.0"
  };
});
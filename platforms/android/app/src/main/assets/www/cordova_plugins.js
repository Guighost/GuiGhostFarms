cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.xmartlabs.cordova.market.Market",
      "file": "plugins/com.xmartlabs.cordova.market/www/market.js",
      "pluginId": "com.xmartlabs.cordova.market",
      "clobbers": [
        "cordova.plugins.market"
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
      "id": "cordova-plugin-fbanfree.FBANFree",
      "file": "plugins/cordova-plugin-fbanfree/www/FBANFree.js",
      "pluginId": "cordova-plugin-fbanfree",
      "clobbers": [
        "fbanfree"
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
    }
  ];
  module.exports.metadata = {
    "com.xmartlabs.cordova.market": "1.2.0",
    "cordova-plugin-cocoapod-support": "1.6.2",
    "cordova-custom-config": "5.1.0",
    "cordova-appodeal-prime": "1.0.1",
    "cordova-plugin-fbanfree": "0.0.8",
    "cordova-plugin-inappbrowser": "3.2.0"
  };
});
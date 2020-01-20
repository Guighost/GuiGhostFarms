cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-fbanfree.FBANFree",
      "file": "plugins/cordova-plugin-fbanfree/www/FBANFree.js",
      "pluginId": "cordova-plugin-fbanfree",
      "clobbers": [
        "fbanfree"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-cocoapod-support": "1.6.2",
    "cordova-plugin-fbanfree": "0.0.8"
  };
});
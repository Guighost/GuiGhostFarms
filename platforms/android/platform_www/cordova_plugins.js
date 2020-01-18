cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-enhance.Enhance",
      "file": "plugins/cordova-plugin-enhance/www/enhance.js",
      "pluginId": "cordova-plugin-enhance",
      "clobbers": [
        "Enhance"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-enhance": "3.0.0"
  };
});
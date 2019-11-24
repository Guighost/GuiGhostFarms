cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-mopub/www/MoPub.js",
        "id": "cordova-plugin-mopub.MoPub",
        "pluginId": "cordova-plugin-mopub",
        "clobbers": [
            "window.MoPub"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-mopub": "2.4.1",
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-splashscreen": "5.0.3"
}
// BOTTOM OF METADATA
});
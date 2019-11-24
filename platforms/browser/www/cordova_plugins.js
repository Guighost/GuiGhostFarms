cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-mopub/www/MoPub.js",
        "id": "cordova-plugin-mopub.MoPub",
        "pluginId": "cordova-plugin-mopub",
        "clobbers": [
            "window.MoPub"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-mopub": "2.4.1",
    "cordova-plugin-extension": "1.5.4"
}
// BOTTOM OF METADATA
});
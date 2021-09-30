cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-applovin-max/www/applovinmax.js",
        "id": "cordova-plugin-applovin-max.AppLovinMAX",
        "pluginId": "cordova-plugin-applovin-max",
        "clobbers": [
            "applovin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-enhance/www/enhance.js",
        "id": "cordova-plugin-enhance.Enhance",
        "pluginId": "cordova-plugin-enhance",
        "clobbers": [
            "Enhance"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-market/www/market.js",
        "id": "cordova-plugin-market.Market",
        "pluginId": "cordova-plugin-market",
        "clobbers": [
            "cordova.plugins.market"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/com.xmartlabs.cordova.market/www/market.js",
        "id": "com.xmartlabs.cordova.market.Market",
        "pluginId": "com.xmartlabs.cordova.market",
        "clobbers": [
            "cordova.plugins.market"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-applovin-max": "1.0.6",
    "cordova-plugin-enhance": "3.0.0",
    "cordova-plugin-inappbrowser": "5.0.0",
    "cordova-plugin-market": "1.2.0",
    "cordova-plugin-network-information": "3.0.0",

    "com.xmartlabs.cordova.market": "1.2.0"
}
// BOTTOM OF METADATA
});
cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-last-cam.LastCam",
      "file": "plugins/cordova-plugin-last-cam/www/LastCam.js",
      "pluginId": "cordova-plugin-last-cam",
      "clobbers": [
        "LastCam"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-last-cam": "0.0.1"
  };
});
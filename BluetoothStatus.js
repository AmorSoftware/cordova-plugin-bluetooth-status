var exec = require('cordova/exec');

var BluetoothStatus = function() {
};

BluetoothStatus.initPlugin = function() {
    //wait for device to be ready
    document.addEventListener("deviceready", function () {
        exec(null, null, "BluetoothStatus", "initPlugin", []);
    }, false);
};

BluetoothStatus.turnOffSpeakerPhone = function() {
    exec(null, null, "BluetoothStatus", "turnOffSpeakerPhone", []);
};


BluetoothStatus.turnOnSpeakerPhone = function() {
    exec(null, null, "BluetoothStatus", "turnOnSpeakerPhone", []);
};

BluetoothStatus.enableBT = function() {
    exec(null, null, "BluetoothStatus", "enableBT", []);
};

BluetoothStatus.promptForBT = function() {
    exec(null, null, "BluetoothStatus", "promptForBT", []);
};

BluetoothStatus.hasBT = false;
BluetoothStatus.hasBTLE = false;
BluetoothStatus.BTenabled = false;
BluetoothStatus.iosAuthorized = true;

module.exports = BluetoothStatus;

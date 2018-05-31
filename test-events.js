var events = require('events');
var eventEmitter = new events.EventEmitter();


var bookingHouseLastBedHandler = function (val) {
    console.log("value1", val)
}

var bookingHouseAnyBedHandler = function (val) {
    console.log("value2", val)
}

var bookingHouseAnyBedHandler = function (val) {
    console.log("value2", val)
}

eventEmitter.on('bookingHouseLastBed', bookingHouseLastBedHandler);
eventEmitter.on('bookingHouseAnyBed', bookingHouseAnyBedHandler);

module.exports = eventEmitter;
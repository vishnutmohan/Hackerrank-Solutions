var events = require('./test-events');
var input = `6
"Booking", "last bed", 10000
"Booking", "any bed", 8000
"Booking", "any bed", 6000
"Booking", "last bed", 7000
"House visit", "new lead", 5
"House visit", "existing lead", 6
4.8
`
var inputArray = input.split("\n");
var bookingPoints = 0;
var housePoints = 0;
var hosueVisits = 0;
var totalPoints = 0;
var rating = parseFloat(inputArray[inputArray.length - 2]);
for (var i = 1; i < inputArray.length - 1; i++) {
    if (inputArray[i].includes(`"Booking", "last bed"`)) {
        var bookArr = inputArray[i].split(",");
        bookingPoints += .15 * parseInt(bookArr[bookArr.length - 1]);
        events.emit('bookingHouseLastBed', bookingPoints)
    }
    if (inputArray[i].includes(`"Booking", "any bed"`)) {
        var bookArr = inputArray[i].split(",");
        bookingPoints += .10 * parseInt(bookArr[bookArr.length - 1]);
        events.emit('bookingHouseAnyBed', bookingPoints)
    }
    if (inputArray[i].includes(`"House visit", "new lead"`)) {
        var bookArr = inputArray[i].split(",");
        var hosueVisitNewLead = parseInt(bookArr[bookArr.length - 1]);
        housePoints += 1000 * hosueVisitNewLead;
        hosueVisits += hosueVisitNewLead
    }
    if (inputArray[i].includes(`"House visit", "existing lead"`)) {
        var bookArr = inputArray[i].split(",");
        var hosueVisitExistingLead = parseInt(bookArr[bookArr.length - 1]);
        housePoints += 700 * hosueVisitExistingLead;
        hosueVisits += hosueVisitExistingLead
    }
}

if (hosueVisits > 30)
    housePoints *= 1.10
if (hosueVisits >= 10 && hosueVisits <= 30)
    housePoints *= 1.05
totalPoints = bookingPoints + housePoints;
if (rating >= 4.5)
    totalPoints *= 1.5
console.log(totalPoints);
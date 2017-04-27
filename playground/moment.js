var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current Timestamp', now.unix());

var timestamp = 1492900152;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'))

// January 3rd, 2016 @ 12:13 AM
console.log('current moment diff format', currentMoment.format('MMMM Do, YYYY @ h:MM A'));



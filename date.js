var today = moment().format("MMMM Do YYYY, h:mm:ss a");
var displayDate = (document.getElementById("date").innerHTML = today);
var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// momentjs time code
moment().format("MMMM Do YYYY, h:mm:ss a");

var loadTimeBlock = function (i) {
  for (var i = 0; i < hours.length; i++) {
    createTimeBlock(i);
  }
};

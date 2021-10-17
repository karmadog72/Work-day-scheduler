var today = moment().format("MMMM Do YYYY, h:mm:ss a");
var displayDate = (document.getElementById("date").innerHTML = today);
var timeBlock = {};

var createTimeBlock = function () {
  var timeBlockLi = $("<li>").addClass("list-group-item");
  var timeBlockSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(timeBlockDate);
  var timeBlockP = $("<p>").addClass("m-1").text(timeBlockText);

  // append span and p element to parent li
  timeBlockLi.append(timeBlockSpan, timeBlockP);

  // append to ul list on the page
  $("#list-" + timeBlockList).append(timeBlockLi);
};

// momentjs time code
moment().format("MMMM Do YYYY, h:mm:ss a");

var loadTimeBlock = function () {
  timeBlock = JSON.parse(localStorage.getItem("timeBlock"));
  console.log(date);
  if (!timeBlock) {
    timeBlock = {
      past: [],
      present: [],
      future: [],
    };
  }

  $.each(timeBlock, function (list, arr) {
    arr.forEach(function (timeBlock) {
      createTimeBlock(
        timeBlock.past,
        timeBlock.present,
        timeBlock.future,
        list
      );
    });
  });
};

var saveTimeBlock = function () {
  localStorage.setItem("timeBlock", JSON.stringify(timeBlock));
};

var hour = moment().format("H");
var auditTimeBlock = function () {
  for (let i = 8; i < 16; i++) {
    if (hour < i) {
      document.getElementsByClassName("saveBtn").classList.add("btn-danger");
    }
  }
};
// var saveBtn = document;
// document.getElementsByClassName;
// "saveBtn".addEventListener("click", function () {
//   alert("Block Scheduled!");
// });

loadTimeBlock();

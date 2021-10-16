var today = moment().format("MMMM Do YYYY, h:mm:ss a");
var displayDate = (document.getElementById("date").innerHTML = today);

// momentjs time code
moment().format("MMMM Do YYYY, h:mm:ss a");

var timeBlock = function () {
  tasks = JSON.parse(localStorage.setItem(text, time));

  if (!timeBlock) {
    timeBlock = {
      past: [],
      present: [],
      future: [],
    };
  }

  $.each(timeBlock, function (list, arr) {
    arr.forEach(function (timeBlock) {
      timeBlock(past.date, present.date, future.date, list);
    });
  });
};

var saveTimeBlock = function () {
  localStorage.setItem("timeBlock", JSON.stringify(timeBlock));
};

var auditTimeBlock = function (timeBlock) {
  var date = $(timeBlock).find("span").text().trim();

  var time = moment(date, "L").set("hour", 16);
  $(timeBlock.removeClass("list-group-item-warning list-group-item-danger"));
  if (moment().isAfter(time)) {
    $(timeBlock).addClass("list-group-item-danger");
  } else if (Math.abs(moment().diff(time, "days")) <= 2) {
    $(timeBlock).addClass("list-group-item-warning");
  }
};

timeBlock();

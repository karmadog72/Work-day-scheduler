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
// creating variables for HTML
var createTimeBlock = function (i) {
  var newLi = $("<li>").addClass("list-group-item");
  var newRow = $("<div></div>").addClass("row");
  var newTime = $("<div></div>")
    .addClass(
      "col-2 d-flex align-items-left border border-light border-left-color: #32A1CE; justify-content-center "
    )
    .text(hours[i]);
  var newColInput = $("<div></div>").addClass(
    "col-8 bg-info d-flex align-items-left justify-content-center "
  );
  var newInput = $(
    "<input type='textArea' style='height: 100%; width:100%'></input>"
  ).attr("id", hours[i]);
  var saveBtn = $("<button type='button'></button>")
    .addClass("saveBtn btn-default")
    .attr("data-id", hours[i])
    .append('<i class="fas fa-save"></i>');
  var btnCol = $("<div></div>").addClass(
    "col-1 bg-warning text-black d-flex align-items-center"
  );
  var task = localStorage.getItem(hours[i]);
  
  if (task) {
      newInput.val(task)
  }
  var hour =moment().format("H";
  if(hour > militaryHours[i]){
      newInput.addClass('bg-danger')
  }
  if (hour == militaryHours[i]) {
      newInput.addClass('bg-warning')
  }
  if (hour < militaryHours[i]) {
      newInput.addClass('bg-success')
  }
  btnCol.append(saveBtn)
  newColInput.append(newInput)
  //append to ul list on the page 
  newRow.append(newTime, newColInput, btnCol)
  newLi.append(newRow)
  $("#list").append(newLi);
};

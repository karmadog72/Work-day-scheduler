var today = moment().format("MMMM Do YYYY, h:mm:ss a");
var displayDate = (document.getElementById("date").innerHTML = today);
console.log(today);

moment().format("MMMM Do YYYY, h:mm:ss a"); // October 16th 2021, 10:04:24 am

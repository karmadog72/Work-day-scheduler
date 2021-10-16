var displayDate = document.getElementById("date").innerHTML = date;

// date starts here
//January = 0
var today = new Date();
var dd = string(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
document.(today);

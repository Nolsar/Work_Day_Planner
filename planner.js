// WHEN I open the planner, the current day is displayed at the top of the calenda
var monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
];

var days = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//test function in console
// console.log(days[(new Date()).getMonth()] + "," + ' ' + monthNames[(new Date()).getMonth()] + " " + (new Date()).getDate());

//current date displayed at the top of page
var date = days[(new Date()).getMonth()] + "," + ' ' + monthNames[(new Date()).getMonth()] + " " + (new Date()).getDate();
$("#currentDay").text(date);

// WHEN I scroll down, THEN I am presented with time blocks for standard business hours
var currentHour = new Date();
console.log(currentHour.getHours());

// variables
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");

// WHEN I view the time blocks for that day, THEN each time block is color-coded to indicate whether it is in the past, present, or future



//function that changes color to red when it is in the past & blue current & green future;
              


// WHEN I click into a time block


// THEN I can enter an event

        //allows input of an event

// WHEN I click the save button for that time block

        //save the input to the schedule

// THEN the text for that event is saved in local storage

        // text is saved in local storgare

// WHEN I refresh the page
// THEN the saved events persist

        //cancel page refresh
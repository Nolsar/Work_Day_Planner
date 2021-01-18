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

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
console.log(new Date);

        //need to add date to html



    


        //***time object
        // var mons = ["Jan", "Feb", "Mar"];
        // mons[(new Date()).getMonth()]

        // "Jan"

        // var days = ["Sunday", "Monday", "Tuesday"];
        // days[(new Date()).getDay()]

        // "Tuesday"

        // if(i === 12){
        //     chosenTag.css(["background-color", "red"]);
        //     chosenTag.addClass("red-class");
        // }
        // if((new Date()).getHours() === i){ // uses military time 0-23 for hours
        //     chosenTag.addClass("red-class");
        // }

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
        //function that changes color to red when it is in the past & blue current & green future

// WHEN I click into a time block

        //onclick event for time block

// THEN I can enter an event

        //allows input of an event

// WHEN I click the save button for that time block

        //save the input to the schedule

// THEN the text for that event is saved in local storage

        // text is saved in local storgare

// WHEN I refresh the page
// THEN the saved events persist

        //cancel page refresh


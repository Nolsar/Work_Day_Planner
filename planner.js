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



function pastPresentFuture() {
        hour = currentHour.getHours();
        $(".time-block").each(function () {
            var thisHour = parseInt($(this).attr("id"));
    
            if (thisHour > hour) {
                $(this).addClass("future")
            }
            else if (thisHour === hour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("past");
            }
        })
    }
    
    pastPresentFuture();

// WHEN I view the time blocks for that day, THEN each time block is color-coded to indicate whether it is in the past, present, or future



//function that changes color to red when it is in the past & blue current & green future;



// WHEN I click into a time block
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
        var time = $(this).parent().attr("id");
        var schedule = $(this).siblings(".schedule").val();
        // THEN I can enter an event and the text is saved in local storage
        localStorage.setItem(time, schedule);
});

// WHEN I refresh the page, THEN the saved events persist
function setPlanner() {
        $(".time-block").each(function () {
                var id = $(this).attr("id");
                var schedule = localStorage.getItem(id);

                if (schedule !== null) {
                        $(this).children(".schedule").val(schedule);
                }
        });
}
setPlanner();


// THEN the text for that event is saved in local storage



// WHEN I refresh the page
// THEN the saved events persist

        //cancel page refresh
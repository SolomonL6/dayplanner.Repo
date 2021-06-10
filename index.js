// Call variable for a moment function

var m = moment();

// Call the variables of the calendar

var today = m.format('dddd');
var thishour = m.format('h:mm');
var militaryHour = m.format('HH');
var fullDayandTime = m.format('MMM Do, h:mm a');

//set current time to display at top of the calendar
$('#currentDay').text(fullDayandTime);

var timeBoxes = $("div:first").children().length;

console.log(timeBoxes);

// function colorBoxes(){
// for (i= 0; i < containerrow.length, i++)

// if militaryHour > datetime, eventbox class to past
// if militaryHour < datetime, eventbox class future
// else eventbox class present
// }

// sibling.addClass("past")
// sibling.addClass("future")
// sibling.addClass("present")

$(".hour").on("click", function() {
    console.log(($(this).children().attr("datetime")));
    $(this).siblings().first().addClass("past");
    });

    console.log($("time").parent().next().text());
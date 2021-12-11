//attack the header
//get the current date
// apply the current date to the existing header

//every day has a regular work schedule from 9-5pm
//create 8 list items with children
//children include: hour, text box, save button
//text box will start off empty but can be saved into the local storage


//when it is past that time, will change the color of the list item
//when it is the current hour, list item will be a particular color
//for future hours, those list items will be a different color

//when i click on the box, I can edit the content and save it to the lcoal storage

//function to load task form local storage
// function to save task after editing it

var currentDayEl = document.querySelector("#currentDay");
var timeBlockContaier = document.querySelector(".container");
var createTimeBlockEl = function(){
    for (var i = 0; i<8; i++) {
        var timeBlockEl = $("<div>").addClass("time-block");
        var hourEl = $("<p>").addClass(".hour").text(x + "AM");
        



        
    }
}
var setCurrentDay = function(){
    var day = moment().format("dddd, MMM Do YY");
    
    currentDayEl.textContent = day;
}

setCurrentDay();
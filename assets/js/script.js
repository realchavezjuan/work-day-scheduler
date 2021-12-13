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
var setCurrentDay = function(){
    var day = moment().format("dddd, MMM Do YY");
    
    //currentDayEl.textContent = day; //javascript 
    $("#currentDay").text(day);
}

//initializing object for local storage of task
var schedule = {
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    one: "",
    two: "",
    three: "",
    four: "",
    five: ""
};

//create the 8 time block elements
var createTimeBlockEl = function(){
    var x = 9;
    if (x < 13){
        
        var blockHour = 9;
        loadTask();
        //var text = "example";
        var timeBlockEl = $("<div>").addClass("time-block d-flex row");
        var hourEl = $("<p>").addClass("hour col-1").text(x + "AM");
        var textareaEl = $("<textarea>").addClass("textarea col-10").text(schedule.nine);
        var saveBtnEl = $("<p>").addClass("saveBtn col-1").text("SAVE");
        
        timeBlockEl.append(hourEl);
        timeBlockEl.append(textareaEl);
        timeBlockEl.append(saveBtnEl);
        $(".container").append(timeBlockEl);

        x++;
        if(x===12){
            x=1;
        }
        createTimeBlockEl();
    }
    
}

//get local storage to page
var loadTask = function(){
    schedule = JSON.parse(localStorage.getItem("schedule"));
    console.log(schedule);
}

//save textarea content into local storage
var saveTask = function() {
    var textInBox = $("textarea").val();
    
    console.log(textInBox);
    schedule.nine = textInBox;
    localStorage.setItem("schedule", JSON.stringify(schedule));

}


setCurrentDay();
createTimeBlockEl();

//saves tasks when SAVE Button is clicked
$(".saveBtn").on("click", saveTask);



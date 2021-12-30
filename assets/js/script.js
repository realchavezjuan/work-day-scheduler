var arrayOfTimeBlocks = [
    {
        hour: "9 am",
        text: ""
    },
    {
        hour: "10 am",
        text: ""
    },
    {
        hour: "11 am",
        text: ""
    },
    {
        hour: "12 pm",
        text: ""
    },
    {
        hour: "1 pm",
        text: ""
    },
    {
        hour: "2 pm",
        text: ""
    },
    {
        hour: "3 pm",
        text: ""
    },
    {
        hour: "4 pm",
        text: ""
    },
    {
        hour: "5 pm",
        text: ""
    }
];

var main = function(){
    setCurrentDay();
    createTimeBlockEl();
    loadTask();
    colorCode();
}

// sets current date on header
var setCurrentDay = function(){
    var day = moment().format("dddd, MMM Do YY");
    
    //places it on the header
    $("#currentDay").text(day);
}

//create the 8 time block elements
var createTimeBlockEl = function(){
    
    // creates 8 time block elements
    for (var i = 0; i < 9; i++) {
        var timeBlockEl = $("<div>").addClass("time-block d-flex row");
        var hourEl = $("<p>").addClass("hour col-1 ").text(arrayOfTimeBlocks[i].hour);
        var textareaEl = $("<textarea>").addClass("col-10").attr("id", [i]).attr("placeholder", "Write Task Here");
        var saveBtnEl = $("<p>").addClass("saveBtn col-1").attr("id", [i]).text("SAVE");
        
        timeBlockEl.append(hourEl);
        timeBlockEl.append(textareaEl);
        timeBlockEl.append(saveBtnEl);
        $(".main-container").append(timeBlockEl);
    }

}

//get local storage to page
var loadTask = function(){
    // check if there is an array in local storage
    //if true, change array with locally stored array
    //if false, use existing array in global scope
    if(localStorage.getItem("schedule")){
        // change array with array stored in local storage
        arrayOfTimeBlocks = JSON.parse(localStorage.getItem("schedule"));
        console.log("changing array to locally stored array...");
    }

    // add text from local storage into existing textarea elements
    for (let i = 0; i < 9; i++) {
        var textAreaEl = $("textarea")[i];
        textAreaEl.innerHTML = arrayOfTimeBlocks[i].text;
    }
    
}

//save textarea content into local storage
var saveTask = function(event) {
    // check if event is a save btn
    var elementId = $(event.target).hasClass("saveBtn");
    // if true, grab its id
    if(elementId){
        var saveButtonId = $(event.target).attr("id");
        console.log("save button id: ", saveButtonId);
    
        // look through the text area id's to match the save button id
        for (let i = 0; i < 9; i++) {
            var textAreaEl = $("textarea")[i];
            var textAreaId = $(textAreaEl).attr("id");
            //if save button id matches text area id, save info into local storage
            if(textAreaId === saveButtonId){
                //store text in textarea into array
                var text = textAreaEl.value;
                arrayOfTimeBlocks[i].text = text;
                // store array with updated text into local storage
                localStorage.setItem("schedule", JSON.stringify(arrayOfTimeBlocks));
            }
        }   
    }  
}

// color code textarea elements
var colorCode = function() {
    // get current hour
    var currentHour = parseInt(moment().format('H'));

    // arrayo of work hours in a day
    var workHour = [9,10,11,12,13,14,15,16,17];
    
    for (let i = 0; i < 9; i++) {
        var textAreaEl = $("textarea")[i];
        // if current hour matches a working hour add color class to text area element
        if (currentHour === workHour[i] ){
            $(textAreaEl).addClass("present");
        }
        if (currentHour > workHour[i]){
            $(textAreaEl).addClass("past");
        }
        if (currentHour < workHour[i]){
            $(textAreaEl).addClass("future");
        }
        
    }
}

//load app
main();
//saves tasks when SAVE Button is clicked
$(".main-container").on("click", saveTask);




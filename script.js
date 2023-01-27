//wrap code with ready function, function called when dom is fully loaded
$(document).ready(function() {
function evaluateOver(time){
  if(currentHour > time){
    return "past"
  } else if (currentHour == time){
    return "present"
  } else{
    return "future"
  }
}
var currentHour = dayjs().hour();
var dayWeek = dayjs().format('[Today is] dddd');
var todaysDay = document.getElementById('currentDay');

//display the day of the week in the header
todaysDay.innerHTML = `<h1>${dayWeek}</h1>`


//array of all the working hours in a day
var times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM","1:00 PM","2:00 PM","3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM","7:00 PM", "8:00 PM", "9:00 PM"]


//takes the html example to loop and iterate over array times, adds unique ID, class and text to each row
for(let i=0; i< times.length; i++){
  document.getElementById("container").innerHTML += 
  `<div id="hour-${i+9}" class="row time-block ${evaluateOver(i+9)}">
  <div class="col-2 col-md-1 hour text-center py-3">${times[i]}</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
  </button>
  </div>
  `
}

//added event listener to save button and stores values in local storage
$(document).on('click', '.saveBtn', function () {
  var timeBlockId = $(this).closest('.time-block').attr('id');
  var description = $(this).siblings('.description').val();
  localStorage.setItem(timeBlockId, description);
})

//iterates over each time-block element, gets its id attribute, uses it as a key to retrieve the corresponding value from localStorage, and sets the value of the textarea element inside the time-block to the retrieved value
$('.time-block').each(function() {
  var timeBlockId = $(this).attr('id');
  var savedInput = localStorage.getItem(timeBlockId);
  if (savedInput) {
    $(this).find('.description').val(savedInput);
  }
});
});

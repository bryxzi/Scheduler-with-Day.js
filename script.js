// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var dayWeek = dayjs().format('[Today is] dddd');
console.log(dayWeek)
$('#currentDay').text(dayWeek);

var currentHour = dayjs().hour();
console.log(currentHour);


function evaluateOver(time){
  if(currentHour > time){
    return "past"
  } else if (currentHour == time){
    return "present"
  } else{
    return "future"
  }
}
evaluateOver(15)











// var todaysDay = document.getElementById('currentDay');
// todaysDay.innerHTML = `<h1>${dayWeek}</h1>`
// var times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM","fasd","fsadf","Fasdf", "time"]
// for(let i=0; i< times.length; i++){
// document.getElementById("container").innerHTML += 
// `<div id="hour-${i+9}" class="row time-block ${evaluateOver(i+9)}">
//   <div class="col-2 col-md-1 hour text-center py-3">${times[i]}</div>
//   <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//   <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//   <i class="fas fa-save" aria-hidden="true"></i>
// </button>
// </div>
// `
// }

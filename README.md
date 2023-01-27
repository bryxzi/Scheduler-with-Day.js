# Scheduler-with-Day.js

A simple web application that helps users plan their day by providing a time-block schedule for each hour of the workday.

## Deployment Information 

* Deployment Link: https://bryxzi.github.io/Scheduler-with-Day.js/
* Link to my GitHub: https://github.com/bryxzi

## Features
* Displays the current day of the week in the header
* Provides a time-block schedule for each hour of the workday (9am to 9pm)
* Each time-block has a textarea for the user to input their plans for that hour
* A save button for each time-block that saves the user's plans to local storage
* The app uses the Day.js library to handle date and time operations
* The app uses the jQuery library to interact with the DOM

## Getting Started
* Clone or download the repository
* Open the index.html file in your browser
* Start planning your day by inputting your plans into the textareas and clicking the save button

## How it works
* The app uses the evaluateOver function to determine if a time-block is in the past, present, or future. This is determined by comparing the current hour with the hour of the time-block. 
* The evaluateOver function returns a string value of past, present, or future that is used as a class for the time-block div.
* The currentHour variable is set to the current hour using the Day.js library. The dayWeek variable is set to the current day of the week using the Day.js library. The todaysDay variable  is set to the element with the id of currentDay in the DOM.
* The times array contains all the working hours in a day. The for loop is used to iterate over the times array and add a unique ID, class, and text to each row in the DOM. The innerHTML property of the element with the id of container is used to add the new rows to the DOM.
* The $(document).on('click', '.saveBtn', function () event listener is added to the save button, and the values in the textarea is stored in local storage.
* The $('.time-block').each(function() function retrieves the saved data from local storage and inputs the values back into the textarea.

## Built With
* HTML
* CSS
* JavaScript
* Day.js
* jQuery

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

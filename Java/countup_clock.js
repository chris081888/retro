// Define the updateClock function
function updateClock() {
    // Get the current date and time
    var now = new Date();

    // Calculate the time elapsed since a specific date
    var startDate = new Date('1994-04-11T00:00:00Z'); // Approximately hen Nicolodean stopped selling moon shoes
    var timeElapsed = now - startDate;

    // Calculate the years, days, hours, minutes, and second
    //(365 days in a year, 24 hours in a day, 60 minutes in an hour, 60 seconds in a minute, 1000 milliseconds in a second.
    var years = Math.floor(timeElapsed / (365 * 24 * 60 * 60 * 1000));
    var miliyears = Math.floor(years * 365 * 24 * 60 * 60 * 1000);
    var days = Math.floor((timeElapsed - miliyears) / (24 * 60 * 60 * 1000));
    var milidays = Math.floor(days * 24 * 60 * 60 * 1000);
    var hours = Math.floor((timeElapsed - miliyears - milidays) /(60 * 60 * 1000));
    var milihours = Math.floor(hours * 60 * 60 * 1000);
    var minutes = Math.floor((timeElapsed - miliyears - milidays - milihours) /(60 * 1000));
    var miliminutes = Math.floor(minutes * 60 * 1000);
    var seconds = Math.floor((timeElapsed % (60 * 1000)) / 1000);
    var miliseconds = Math.floor(seconds * 1000);
    // Display the count-up clock on the web page
    var clockElement = document.getElementById('clock'); // Replace 'clock' with the ID of the HTML element
    clockElement.innerHTML = 'Time elapsed: '+ years + ' years, ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds,';

    // Update the clock every 1 second
    setTimeout(updateClock, 1000);
}

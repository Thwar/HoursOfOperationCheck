# HoursOfOperationCheck.js
Auuthor: Thomas Rosales

HoursOfOperationCheck v1.0 is a developer friendly JQuery script that checks if your business is currently open.

# How is works:
    day: 'Monday'
    isOpen: false,     // Is the Business open on this day?
    openTime: '10:00', //Pick Openning Time in 24hr format
    closeTime: '21:00' //Pick Closing Time in 24hr format
    
    Pick which days the business is open and pick the Opening Time and Closing Time 
    for that day of the week. (Note: 24 hr format)

Call checkBusinessStatus() to return a boolean for the status of the business (closed = false, open = true)

# Example
https://jsfiddle.net/xpkbb6nt/15/

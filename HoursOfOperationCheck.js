//HoursOfOperationCheck.js by Thomas Rosales 
//Version v1.0 3/27/2015

//EDIT WEEKDAY OPERATION HOURS BELOW
var week = [{
    //  day: 'Sunday'
    isOpen: false,
    openTime: '10:00',
    closeTime: '21:00'
}, {
    //    day: 'Monday'
    isOpen: false,
    openTime: '10:00',
    closeTime: '21:00'
}, {
    // day: 'Tuesday'
    isOpen: false,
    openTime: '10:00',
    closeTime: '21:00'
}, {
    //    day: 'Wednesday'
    isOpen: false,
    openTime: '10:00',
    closeTime: '21:00'
}, {
    //  day: 'Thursday'
    isOpen: false,
    openTime: '21:00',
    closeTime: '24:00'
}, {
    // day: 'Friday'
    isOpen: true,
    openTime: '10:15',
    closeTime: '10:16'
}, {
    // day: 'Saturday'
    isOpen: false,
    openTime: '10:00',
    closeTime: '21:00'
}];

//Call this function for boolean value
function checkBusinessStatus() {
    var status;
    var dt = new Date();

    //Get Current Time
    var currentTime = dt.getHours() + "" + ('0' + dt.getMinutes()).slice(-2);
    currentTime = parseInt(currentTime, 10);

    //Get Current Week Day Number
    var currentWeekDayNum = dt.getDay();

    //Loop week times 
    $.each(week, function (dayNum, value) {

        //Check current weekday time with stored weekday values
        if (dayNum == currentWeekDayNum) {

            var openTime = value.openTime.replace(":", "");
            var closeTime = value.closeTime.replace(":", "");

            openTime = parseInt(openTime, 10);
            closeTime = parseInt(closeTime, 10);

            if ((currentTime >= openTime) && (currentTime < closeTime) && value.isOpen === true) {
                // alert('OPEN');
                status = true;
            } else {
                // alert('CLOSED');
                status = false;
            }
            return false; //break loop we are done
        }
    });
    return status; // Return false if closed | true if open
}

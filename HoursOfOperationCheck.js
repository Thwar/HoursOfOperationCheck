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

        //If 
        if (dayNum == currentWeekDayNum) {

            var openTime = value.openTime.replace(":", "");
            var closeTime = value.closeTime.replace(":", "");

            openTime = parseInt(openTime, 10);
            closeTime = parseInt(closeTime, 10);

            alert(dayNum + '\n' + value.isOpen + '\nopening time:' + openTime + '\nclosing time:' + closeTime + '\nCurrent Time:' + currentTime);

            if ((currentTime >= openTime) && (currentTime < closeTime) && value.isOpen === true) {
                // alert('OPEN');
                status = true;
            } else {
                // alert('CLOSED');
                status = false;
            }
            return false;
        }
    });
    return status;
}

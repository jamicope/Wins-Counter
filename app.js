function handleClicks1() {
    var liveTransfer = 0;
    $('.js-live-transfer').text(liveTransfer);
    $('.js-clicker1').click(function (event) {
        liveTransfer += 1;
        $('.js-live-transfer').text(liveTransfer);
    });
}
$(handleClicks1);


function handleClicks() {
    var appointmentsMade = 0;
    $('.js-appointments').text(appointmentsMade);
    $('.js-clicker').click(function (event) {
        appointmentsMade += 1;
        $('.js-appointments').text(appointmentsMade);
    });
}

$(handleClicks);

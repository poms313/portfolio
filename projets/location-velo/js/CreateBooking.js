class CreateBooking {
    constructor() {
        this.changeHtml();
        this.showBookingText();
        this.scrollToDiv();
    }

    changeHtml() {
        // Change the number of available bikes
        $('#available').html(parseInt($('#available').html() - 1));
        // Create booking text
        $('#booking-name').html(`Félicitations, ${localStorage.firstName} ${localStorage.lastName} a réservé un vélo!`);
        $('#booking-address').html(`Situé à la station ${sessionStorage.name}, à l'adresse: ${sessionStorage.address}`);
        document.getElementById('submit').disabled = true;
    }

    showBookingText() {
        $('#booking-false').css('display', 'none');
        $('#booking-true').css('display', 'block');
        // Simulate a click to close the modal
        $('.close').trigger('click');
    }

    scrollToDiv() {
        $('html, body').animate({
            scrollTop: $("#booking-true").offset().top
        })
    }
}
/* This class is use when the user cancel a booking */
class CancelBooking {
    constructor() {
        this.init()
    }
    init() {
        $('#booking-false').css('display', 'block');
        $('#booking-true').css('display', 'none');
        $('#available').html(+(parseInt($('#available').html()) + 1));
        document.getElementById('submit').disabled = false;
        sessionStorage.setItem('stopChrono', 'true')
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('address');
        sessionStorage.removeItem('booking');
    }
}
/* On a the page load chef if a booking is in progress 
and filled in form fields with local storage */

class CheckStorage {
    constructor() {
        this.checkStorage()
        this.nameCheck()
    }

    checkStorage() {
        if (sessionStorage.booking === 'true') {
            $('#booking-false').css('display', 'none');
            $('#booking-true').css('display', 'block');
            const NewCreateBooking = new CreateBooking();
            const oldTimer = new Chrono(sessionStorage.min, sessionStorage.sec);
            document.getElementById('submit').disabled = true;
        } else {
            $('#booking-false').css('display', 'block');
            $('#booking-true').css('display', 'none');
            document.getElementById('submit').disabled = false;
        }
    }

    nameCheck() {
        if (localStorage.firstName) {
            $('input#first-name').val(localStorage.firstName);
        }
        if (localStorage.lastName) {
            $('input#last-name').val(localStorage.lastName);
        }
    }
}
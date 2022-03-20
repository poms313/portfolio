// Start and stop the timer of the booking

class Chrono {
    constructor(min, sec, startChrono) {
        this.min = Number(min)
        this.sec = Number(sec)
        this.startTimer()
    }

    startTimer() {
        const startChrono = setInterval(() => {

            if (this.sec < 0) {
                this.min--;
                this.sec = 59;
            }

            if (this.min < 0) {
                clearInterval(startChrono);
                const newCancelBooking = new CancelBooking();
            }

            if (this.sec == 1 || this.sec == 0) {
                this.secondes = 'seconde';
            } else {
                this.secondes = 'secondes'
            }

            if (this.min == 1 || this.min == 0) {
                this.minutes = 'minute';
            } else {
                this.minutes = 'minutes'
            }

            if (sessionStorage.stopChrono == 'true') {
                clearInterval(startChrono);
                sessionStorage.removeItem('min');
                sessionStorage.removeItem('sec');
                sessionStorage.removeItem('stopChrono');
            }

            this.minutesText = (this.min < 10) ? "0" + this.min + this.minutes :
                this.min + ' ' + this.minutes;
            this.secondesText = (this.sec < 10) ? '0' + this.sec + ' ' + this.secondes :
                this.sec + ' ' + this.secondes;

            $("#timer").html(this.minutesText + ' : ' + this.secondesText);
            sessionStorage.setItem('min', this.min);
            sessionStorage.setItem('sec', this.sec);
            this.sec--;

        }, 1000)
    }
}
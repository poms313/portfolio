class CreateStorage {
    constructor() {
        this.createStorage();
    }
    createStorage() {
        sessionStorage.setItem('name', document.getElementById('name').innerHTML)
        sessionStorage.setItem('address', $('#address').html())
        localStorage.setItem('firstName', $('input#first-name').val()) 
        localStorage.setItem('lastName', $('input#last-name').val())
        sessionStorage.setItem('booking', 'true')
    }
}
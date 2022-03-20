$(function () {
 
  const checkStorageOnLoad = new CheckStorage;
  Slider.initSlider();

  // Add and refresh list of stations every 3 min
  const newCreateStations = new CreateStations();
  const refreshStations = setInterval(() => {
    const newCreateStations = new CreateStations();
  }, 180000)

  // When the user clicks on the submit button, open the modal 
  $('#submit').on('click', () => {
    // Before valid check only if there is bike available
    if ($('#available').text() === '0' || $('#name').text() === 'Nom de la station') {
      alert('Veuillez d\'abord sélectioner une station avec des vélos disponibles')
    } else {
      const canvas = new InitializesCanvas();
      const newShowModal = new ShowModal();
    }
  })

  // Clear the canvas
  $('#clear').on('click', () => {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  })

  // Valid the booking
  $('#confirm').on('click', () => {
    const newCreateStorage = new CreateStorage();
    if (localStorage.firstName != '' && localStorage.lastName != '') {
      const newChangeHtml = new CreateBooking();
      const newChrono = new Chrono(19, 59);
    } else {
      alert('Veuillez entrer votre nom et prénom')
    }
  })

  // Cancel booking
  $("body").on("click", "#cancel", () => {
    const newCancelBooking = new CancelBooking();
  });
});
// Show modal with the canvas on click on submit
class ShowModal {
    constructor() {
        const modal = document.getElementById('myModal');
        modal.style.display = "block";
        const span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = () => {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}
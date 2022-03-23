document.addEventListener("DOMContentLoaded", function () {

    /* Add sticky class to the menu when the user scroll */
    window.addEventListener("scroll", function () {
        let header = document.getElementById("myNavbar");
        header.classList.toggle("stickyNav", window.scrollY > 0);
    });

    /* Auto close the menu on click outside the menu or internal link */
    const menuColapsed = document.getElementById("collapsibleNavbar");
    document.addEventListener("click", closeMenu);

    function closeMenu() {
        if (menuColapsed.classList.contains("show")) {
            menuColapsed.classList.remove("show");
        }
    }

    /* On contact form submit */
    const submitBtn = document.getElementById('contact-submit');
    submitBtn.addEventListener('click', verifyForm);
    const form = document.getElementById('contactForm')

    function verifyForm(event) {
        const formValidity = form.checkValidity();
        if (formValidity === false) {
            event.preventDefault();
        } else {
            form.action = "contact.php";
        }
        form.classList.add('was-validated');
    }

});
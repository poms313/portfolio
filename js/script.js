document.addEventListener("DOMContentLoaded", function() {
   
  /* Add sticky class to the menu when the user scroll */ 
    window.addEventListener("scroll" ,function() {
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


    /* Lazy Load for optimize the charging time */
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazyLoad"));

    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.replace("lazyLoad", "loaded");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }

});
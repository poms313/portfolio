// This objet manage the slider and this functions

const Slider = {
    slideIndex: 1,
    sliderAuto: null,

    initSlider: function () {
        Slider.afficherSlider();
        Slider.clickBouton();
        Slider.eventClavier();
        Slider.stopSlider();

        Slider.sliderAuto = setInterval(function () {
            Slider.slideIndex++;
            Slider.afficherSlider(Slider.slideIndex);
        }, 5000);
    },

    afficherSlider: (n) => {
        if (n > $('.slide').length) {
            Slider.slideIndex = 1;
        }
        if (n < 1) {
            Slider.slideIndex = $('.slide').length;
        }
        $('.slide').hide();
        $('.slide').eq(Slider.slideIndex - 1).fadeIn('slow');
    },

    changeSlide: (d) => {
        clearInterval(Slider.sliderAuto);
        if (d === 39) {
            Slider.afficherSlider(Slider.slideIndex += 1);
        }
        if (d === 37) {
            Slider.afficherSlider(Slider.slideIndex -= 1);
        }
    },

    clickBouton: () => {
        $('#right').on('click', function () {
            sens = 39;
            Slider.changeSlide(sens);
        });
        $('#left').on('click', function () {
            sens = 37;
            Slider.changeSlide(sens);
        });
    },

    eventClavier: () => {
        $('body').on('keyup', function (e) {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                sens = e.keyCode;
                Slider.changeSlide(sens);
            }
        });
    },

    stopSlider: () => {
        $('.stop-slider').on('click', function () {
            clearInterval(Slider.sliderAuto);
            $('.stop-slider').text('Démarrer').attr('class', 'start-slider green');
            $('.start-slider').on('click', function () {
                Slider.initSlider();
                $('.start-slider').text('Stop').attr('class', 'stop-slider red');
            })
        })
    }
};
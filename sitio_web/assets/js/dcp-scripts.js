$(document).ready(function() {


    if (window.matchMedia("(max-width: 767px)").matches) {
        $('.navbar-toggler').on('click', function() {
            $('.mob-nav-hamburguer').toggleClass('open');
            $(this).closest('#navbar-vivia').toggleClass('open-nav-mobile').closest('body').toggleClass('navigation-open');
        });

        $(".dropdown-item").on('click', function() {
            $('.mob-nav-hamburguer').removeClass('open');
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').addClass('collapsed');
            $('#navbar-vivia').removeClass('open-nav-mobile')
            $('body').removeClass('navigation-open');
        });

    } else {

        $(".dropdown-toggle, .dropdown-menu").mouseover(function() {
            $(this).closest('.nav-item').find('.nav-link').addClass('open-nav')
        });

        $(".dropdown-toggle, .dropdown-menu").mouseout(function() {
            $(this).closest('.nav-item').find('.nav-link').removeClass('open-nav')
        });
    }

    $('#our-alliances-carousel').carousel();

    $('#our-infra-carousel, #commercial-area-carousel').carousel();

    var galleryModal = new bootstrap.Modal(document.getElementById('modal-gallery'), {
        keyboard: false
    });
    $('.thumbnail').click(function() {
        $('.modal-body').empty();
        $($(this).parents('div').html()).appendTo('.modal-body');
        //$('#modal-gallery').modal({ show: true });
        galleryModal.show()
        event.preventDefault()


    });

    $('#modal-gallery').on('show.bs.modal-gallery', function() {
        $('.col-6,.row .thumbnail').addClass('blur');
    })

    $('#modal').on('hide.bs.modal', function() {
        $('.col-6,.row .thumbnail').removeClass('blur');
    })



});
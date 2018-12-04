(function (doc) {



    var body = $('body');
    var cajaLlamarDerecha = $('.landingUp__right--container');

    $(window).bind("load", function () {
        var body = $('body');
        var cajaLlamarDerecha = $('.landingUp__right--container');

        var topCajaLlamarDerecha = cajaLlamarDerecha.offset().top;
        var leftCajaLlamarDerecha = cajaLlamarDerecha.offset().left;
        console.log(cajaLlamarDerecha.offset().left);
        cajaLlamarFlotante();

        $(window).bind('scroll', function () {
            cajaLlamarFlotante();
        });
        $(window).bind('scroll', function () {
            cajaLlamarFlotantes();
        });
        $(window).bind('resize', function () {
            // location.reload();
        });

        /*$(window).bind('beforeunload', function(){
            $(window).scrollTop(0);
        });*/

        function cajaLlamarFlotante() {
            if ($(window).scrollTop() > (topCajaLlamarDerecha - 40)) {
                cajaLlamarDerecha.addClass('landingUp__right--container-fixed');
                cajaLlamarDerecha.css('left', leftCajaLlamarDerecha + 5);
            } else {
                cajaLlamarDerecha.removeClass('landingUp__right--container-fixed');
                cajaLlamarDerecha.removeAttr('style');
            }
        }

        function cajaLlamarFlotantes() {
            if ($(window).scrollTop() > (topCajaLlamarDerecha + 650)) {
                cajaLlamarDerecha.addClass('landingUp__right--container-s');
            } else {
                cajaLlamarDerecha.removeClass('landingUp__right--container-s');
            }
        }

    });

    /*
    Función caja flotante.
    */
    

    //var topCajaLlamarDerecha = cajaLlamarDerecha.offset().top;
    //var leftCajaLlamarDerecha = cajaLlamarDerecha.offset().left;
    /*
    console.log(cajaLlamarDerecha.offset().left)
    
    $(window).bind('scroll', function () {
        cajaLlamarFlotante();
    });
    $(window).bind('scroll', function () {
        cajaLlamarFlotantes();
    });
    $(window).bind('resize', function () {
        // location.reload();
    });
    
    $(window).bind('beforeunload', function(){
        $(window).scrollTop(0);
    });
    
    */


    document.addEventListener('wpcf7mailsent', function (event) {
        //location = 'http://example.com/';
        $('.tigomodal').css('display', 'block');
        $(".boxContacto--azul .tellamamos-msg").empty();
        $(".inmodaldos").empty();
        $(".inmodaltres").empty();
        $(".inmodalcuatro").empty();
    }, false);

    $(document).ready(function () {

        $(".cerrarmodal").click(function () {
            location.reload();
        });

        $('.boxplandos').click(function () {
            $('.tigomodal_minlinks').css('display', 'block');
            $(".boxContacto--azul .tellamamos-msg").empty();
            $(".boxbluu .tellamamos-msg").empty();
            $(".inmodaluno").empty();
            $(".inmodaltres").empty();
            $(".inmodalcuatro").empty();
        });

        $('.boxplannew').click(function () {
            $('.tigomodal_minlinks').css('display', 'block');
            $(".tigomodal_portable .tellamamos-msg").empty();
            $(".boxContacto .tellamamos-msg").empty();
            $(".inmodaluno").empty();
            $(".inmodaltres").empty();
            $(".inmodalcuatro").empty();
        });

        $('.boxplanportable').click(function () {
            $('.tigomodal_portable').css('display', 'block');
            $(".tigomodal_minlinks .tellamamos-msg").empty();
            $(".boxContacto .tellamamos-msg").empty();
            $(".inmodaluno").empty();
            $(".inmodaltres").empty();
            $(".inmodalcuatro").empty();
        });

        $('.boxbronza').click(function () {
            $('.tigomodal_boxuno').css('display', 'block');
            $(".boxContacto--azul .tellamamos-msg").empty();
            $(".inmodaluno").empty();
            $(".inmodaldos").empty();
            $(".inmodalcuatro").empty();
        });

        $('.boxsilva').click(function () {
            $('.tigomodal_boxdos').css('display', 'block');
            $(".boxContacto--azul .tellamamos-msg").empty();
            $(".inmodaluno").empty();
            $(".inmodaltres").empty();
            $(".inmodaldos").empty();
        });

    });

})(document);
function openModal(modal) {
    $(".boxTeLlamamos").empty();
    //return false // →→ Desactivado
    var modalDOM = $(modal);
    modalDOM.fadeIn();
    $('.modal__back').fadeIn();
}
function closeModal() {
    $('.modal').fadeOut();
    $('.modal__back').fadeOut();
    location.reload();
}
function openModalx(modal) {
    var modalDOM = $(modal);
    modalDOM.fadeIn();
    $('.modal__backx').fadeIn();
}
function closeModalx() {
    $('.modal--usodatos').fadeOut();
    $('.modal__backx').fadeOut();
}

$(document).ready(function () {

    
});

$(document).ready(function () {
    
    //Efecto menu

    $(".menu a").each(function (index, elemento) {
        $(this).css({
            "top": "-220px"
        })

        $(this).animate({
            top: "0"
        },2000 + (index * 500))
    })

    // Efecto header

    if ($(window).width() > 800) {
        $("header .textos").css({
            opacity: "0",
            marginTop: "0"
        })

        $("header .textos").animate({
            opacity: "1",
            marginTop: "-52px"
        }, 2000)
    }

    //Scroll elementos menu
    const acercaDe = $("#acerca-de").offset().top,
        menu = $("#platillos").offset().top,
        galeria = $("#galeria").offset().top,
        ubicacion = $("#ubicacion").offset().top

    $("#btn-acerca-de").on("click", function (e) {
        e.preventDefault()
        $("html, body").animate({
            scrollTop: acercaDe - 240
        }, 500)
    })

    $("#btn-menu").on("click", function (e) {
        e.preventDefault()
        $("html, body").animate({
            scrollTop: menu
        }, 500)
    })

    $("#btn-galeria").on("click", function (e) {
        e.preventDefault()
        $("html, body").animate({
            scrollTop: galeria - 50
        }, 500)
    })

    $("#btn-ubicacion").on("click", function (e) {
        e.preventDefault()
        $("html, body").animate({
            scrollTop: ubicacion
        }, 500)
    })

})
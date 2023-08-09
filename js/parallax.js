$(document).ready(function () {

      $(window).scroll(function(){
        const windowWidth = $(window).width()

        if ($(window).scrollTop() >= 5) {
            $("header .menu").css({
                "position": "fixed",
                "max-width": "1600px",
                "z-index":"1000px",
                "background": "#0000007b",
                "transition":" all 0.4s ease 0s"

            })
        }

        if ($(window).scrollTop() <= 4) {
            $("header .menu").css({
                "position": "",
                "max-width": "",
                "z-index":"",
                "background": ""
            })
        }

        if (windowWidth > 800) {
            let scroll = $(window).scrollTop()

            $("header .textos").css({
                "opacity": 1 - scroll / 400, // Cambiar la opacidad a medida que se desplaza hacia arriba
                "transition": "all 0.4s ease 0s" // Añadir animación de transición
            })

            $(".acerca-de article").css({
                "transform": "translate(0px, -" + scroll / 4 + "%)"
            })
        }
      })

      $(window).resize(function () {
        const windowWidth = $(window).width()

        if (windowWidth < 800) {
            $(".acerca-de article").css({
                "transform": "translate(0px, 0px)"
            })
        }
      })

    })
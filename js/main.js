(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

$(document).ready(function () {
    $(".mega-dropdown").hover(
        function () {
            $(this).find(".dropdown-menu").stop(true, true).slideDown(300);
        },
        function () {
            $(this).find(".dropdown-menu").stop(true, true).slideUp(300);
        }
    );
});


    // Activar animaciones con jQuery
    $(document).ready(function () {
        // Animación de entrada en el header
        $('.carousel-caption h5').fadeIn(1000); // Texto de título fadeIn
        $('.carousel-caption h1').slideDown(1000); // Texto principal slideDown
        $('.carousel-caption .btn').fadeIn(2000); // Botones fadeIn
    });

    $(document).ready(function() {
        // Cuando la página cargue, aseguramos que el video de fondo siga visible
        var video = document.getElementById('background-video');
        video.play(); // Aseguramos que el video se mantenga en reproducción
    });
    $(document).ready(function(){
        $('.team-item').hover(
            function() {
                // Al hacer hover: agranda ligeramente
                $(this).animate({
                    marginTop: '-10px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                }, 200);
            },
            function() {
                // Al salir del hover: vuelve a su posición original
                $(this).animate({
                    marginTop: '0px',
                    boxShadow: '0 0 0 rgba(0, 252, 147, 0)'
                }, 200);
            }
        );
    });
    



        // Validación del formulario y spinner de carga
        $("#newsletterForm").submit(function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
            // Spinner de carga
            $("button[type='submit']").html('<i class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></i> Cargando...').prop('disabled', true);
    
            // Simulando el proceso de suscripción
            setTimeout(function() {
                // Mostrar modal de éxito
                $('#subscriptionModal').modal('show');
    
                // Restablecer el formulario y el botón
                $("#newsletterForm")[0].reset();
                $("button[type='submit']").html('Suscribirme').prop('disabled', false);
            }, 2000); // Esperar 2 segundos para simular el proceso
        });


        /*  JAVASCRIPT PURO */

          // Cambiar precios al toggle mensual/anual
  $('#togglePrecios').on('change', function () {
    $('.precio').each(function () {
      const precio = $(this).data(this.checked ? 'anual' : 'mensual');
      $(this).text(`$${precio.toLocaleString()}${$('#togglePrecios').is(':checked') ? '/Año' : '/Mes'}`);
    });
  });

  // Inicializar tooltips de Bootstrap
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(el => new bootstrap.Tooltip(el));

  // Hover en columnas (opcional, estilo tipo tabla visual)
  $('.plan-box').hover(
    function () {
      const index = $(this).data('index');
      $('.plan-box').eq(index).addClass('highlight-col');
    },
    function () {
      $('.plan-box').removeClass('highlight-col');
    }   );

    $(document).ready(function() {
        $(".page-item").click(function() {
            var pageNumber = $(this).text();
            $(".blog-item").each(function(index) {
                var startIndex = (pageNumber - 1) * 6; // Por ejemplo, mostrar 6 artículos por página
                var endIndex = pageNumber * 6;
                if (index >= startIndex && index < endIndex) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
    });

    $(document).ready(function () {
        // Inicialización de AOS.js
        AOS.init();

        // Filtrado por categorías (tags)
        $('.tag').on('click', function () {
            var tag = $(this).data('tag');
            $('.blog-item').each(function () {
                if ($(this).find('a').data('tag') !== tag && tag !== 'all') {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        });

        // Filtrado por búsqueda
        $('#searchInput').on('input', function () {
            var query = $(this).val().toLowerCase();
            $('.blog-item').each(function () {
                var title = $(this).find('a').text().toLowerCase();
                if (title.includes(query)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
    });

    // Filtrar artículos por tags usando jQuery
$(document).ready(function() {
    // Filtrar artículos por tag de fuerza
    $('#filter-fuerza').click(function() {
        $('#blog-list .blog-item').filter(function() {
            return $(this).data('tags').includes('fuerza');
        }).show();
        
        $('#blog-list .blog-item').filter(function() {
            return !$(this).data('tags').includes('fuerza');
        }).hide();
    });

    // Filtrar artículos por tag de nutrición
    $('#filter-nutricion').click(function() {
        $('#blog-list .blog-item').filter(function() {
            return $(this).data('tags').includes('nutrición');
        }).show();
        
        $('#blog-list .blog-item').filter(function() {
            return !$(this).data('tags').includes('nutrición');
        }).hide();
    });
});

// Iniciar AOS.js para las animaciones
AOS.init({
    duration: 1200, // Duración de la animación
    once: true // Solo se anima una vez
});

$(document).ready(function () {
    // Filtrar las clases con base en los checkbox
    $('#filter1').change(function () {
        if ($(this).is(':checked')) {
            $('.power-lifting').show();
        } else {
            $('.power-lifting').hide();
        }
    });

    $('#filter2').change(function () {
        if ($(this).is(':checked')) {
            $('.body-building').show();
        } else {
            $('.body-building').hide();
        }
    });

    $('#filter3').change(function () {
        if ($(this).is(':checked')) {
            $('.cardio').show();
        } else {
            $('.cardio').hide();
        }
    });

    // Hover effect para tarjetas
    $('.card').hover(function () {
        $(this).css('transform', 'scale(1.05)');
    }, function () {
        $(this).css('transform', 'scale(1)');
    });
});

        $(document).ready(function() {

            // toggle menu button on mobile view
            $('.navbar-toggle').on('click', function () {
                $('.toggle-wrap').toggleClass('active');
            });

            // scroll top button: check to see if the window is top if not then display button
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.scroll-top').fadeIn();
                    } else {
                    $('.scroll-top').fadeOut();
                }
            });

            // Set popovers
            $('.scroll').popover();

            // Set fadeIn animation on services section
            new WOW().init();

            // Set time interval on carousel 1 and remove pause on hover
            $('#carousel1').carousel({
                interval: 9500,
                pause: "false"
            });
            // Set time interval on carousel 2 and remove pause on hover
            $('#carousel2').carousel({
                interval: 5000,
                pause: "false"
            });

            // Sincronize slide and button active on click
            var clickEvent = false;

            $('.carousel').on('click', '.nav a', function() {
                clickEvent = true;
                $(this).parent().siblings().removeClass('active');
                $(this).parent().addClass('active');

            }).on('slid.bs.carousel', function(e) {
                if(!clickEvent) {
                    var count = $(this).find('.nav').children().length -1;
                    var current = $(this).find('.nav li.active');
                    current.removeClass('active')
                    .next().addClass('active');
                    var id = parseInt(current.data('slide-to'));
                    if(count == id) {
                        $(this).find('.nav li').first().addClass('active');
                    }
                }
                clickEvent = false;
            });

            //Play/Pause video when click button on tablet view
            $('.video-button').on('click', function() {
                if(video.paused) {
                    video.play();
                    $('.ion-play').hide();
                    $('.ion-pause').show();
                }
                else {
                    video.pause();
                    $('.ion-pause').hide();
                    $('.ion-play').show();
                }   
            }); 

            //Play/Pause video when hover on laptop and desktop view
            $("#video").hover(function () {
                $(this).get(0).play();
            }, 
            function () {
                $(this).get(0).pause();
            });

        });
    

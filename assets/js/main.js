
$('.carousel').carousel({
	  interval: 3500
	})


/* Back to Top */

$(document).ready(function() {
$(window).scroll(function() {
				
    if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })
});




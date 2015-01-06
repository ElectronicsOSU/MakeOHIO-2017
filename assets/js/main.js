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



/* Calendar */


$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
    	left: 'prev,next today',
    	center: 'title',
    	right: 'month,agendaWeek,agendaDay'
    },
    googleCalendarApiKey: 'AIzaSyBu5kL2kgj9AZXCM8kfSLukPx1Vb7bRSh4',
    events: {
      googleCalendarId: 'electronicsosu@gmail.com',
      timezone: 'America/New_York'
    }
  });
});
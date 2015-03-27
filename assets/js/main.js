var apiCall = "https://api.flickr.com/services/feeds/photos_public.gne?id=132038343@N02&tags=featured&lang=en-us&format=json&jsoncallback=?";



// Back to Top

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
    });




  $('#brand, #brand').removeClass('hidden');
  $('#brand, #brand').addClass('animated fadeIn');



  $('#landing, .triangle').removeClass('hidden');
  $('#landing, .triangle').addClass('animated fadeIn');

  $('#summary .heading').removeClass('hidden');
  $('#summary .heading').addClass('animated zoomIn');

  $('#featured').removeClass('hidden');
  $('#featured').addClass('animated fadeIn');



  $.getJSON(apiCall, function(data){
        $.each(data.items, function(i,item){
          $("<img data-u='image'/>").attr("src", item.media.m).appendTo(".flickr-stream")
          .wrap("<div>" + "</div>");
  });
});









});



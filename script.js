$(document).ready(function() {

  // .scroll() creates an event when the user scrolls
  $(window).scroll(function() {

    // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
    var scroll = $(window).scrollTop();

    var objectSelect = $('#display_nav_now');

    // .offset() retrieves current position of element relative to document
    var objectPosition = objectSelect.offset().top;

    if (scroll > objectPosition) {
      $('header').addClass('display_nav');
      console.log("SHOOWWWINNNNG")
    } else {
      $('header').removeClass('display_nav');
      console.log("Not there duh")
    }
  });
});

$('.zen_action').hover(function(){
    $('.zen_gif').toggleClass('hover');
    console.log("zen is going")
});


$('.doorhanger_action').hover(function(){
    $('.doorhanger_gif').toggleClass('hover');
    console.log("doorhanger is going")
});

$('.onbeat_action').hover(function(){
    $('.onbeat_gif').toggleClass('hover');
    console.log("onbeat is going")
});

$('.supercook_action').hover(function(){
    $('.supercook_gif').toggleClass('hover');
    console.log("supercook is going")
});

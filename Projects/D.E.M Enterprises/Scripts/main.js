//Once document is ready, switch title phrases
//Weebly specific workarounds to hide their Nav and Content sections
$(document).ready(function () {
  $(".main-wrap").css("display","none"); //Weebly specific
  $(".nav").css("display","none");       //Weebly specific
  $(".topbar").css("display","none");    //Weebly specific
  window.setInterval(function () {
    if ($(".js-change").html() == "Software/CNC Intergration Solutions") {
      $(".js-change").fadeToggle("slow", "linear",function () {
        $(".js-change").html("CNC Programming");
        $(".js-change").fadeToggle();
      });
    } else if ($(".js-change").html() == "CNC Programming") {
      $(".js-change").fadeToggle("slow", "linear",function () {
        $(".js-change").html("Consulting");
        $(".js-change").fadeToggle();
      });
    } else {
        $(".js-change").fadeToggle("slow", "linear",function () {
          $(".js-change").html("Software/CNC Intergration Solutions");
          $(".js-change").fadeToggle();
      });
    }
},4000);
});

//Click link, give class active and fade out/in old/new pages
$(".a-link").on('click', function() {
  $('.a-link').removeClass("active");
  $(this).addClass("active");
  var x = $(this).attr("href");
  x = x.slice( 1 );
  $(".switch").fadeOut(20);
  $("div#"+x).fadeIn(300, function() {
window.location.href = "#top";
});
});
$('.navbar-nav>li>span').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//Scrolling past Navbar, sticks to top of page
var stickyBar = $('.navbar').offset().top;
$(window).scroll(function() {
    if ($(window).scrollTop() > stickyBar) {
        $('.navbar').addClass('affix');
    }
    else {
        $('.navbar').removeClass('affix');
    }
});

//If broswer is smaller than NavBar text, reduce NavBar text to just 'D.E.M'
$(window).resize(function(){
  if ($(window).width() < 751) {
    $('h4').html("D E M");
  } else {
    $('h4').html("D E M Enterprises");
  }
});
if ($(window).width() < 751) {
  $('h4').html("D E M");
} else {
  $('h4').html("D E M Enterprises");
}

$(document).ready(function () {

  // Top Links
  $(".a-link").on('click', function() {
    var x = $(this).attr("href");
    x = x.slice( 1 );
    $(".switch").slideUp("slow");
    $("div#"+x).slideDown("slow");
  });

  // Next Button
  $(".next").on('click', function() {
    if (!$("#About").is(":hidden")) {
      $(".switch").slideUp("slow");
      $("#Projects").slideDown("slow");
    } else if (!$("#Projects").is(":hidden")) {
      $(".switch").slideUp("slow");
      $("#Contact").slideDown("slow");
    } else if (!$("#Contact").is(":hidden")) {
      $(".switch").slideUp("slow");
      $("#About").slideDown("slow");
    } else {
      $("#About").slideDown("slow");
    }
  });

  //NavBar Corrections
  $(".mt-1").on('click', function() {
    $(".navbar-collapse").addClass("open");
    var value = $('body').css('padding-top');
    if (value === '20px') {
      $('body').css('padding-top', '+=115');
    } else {
      $('body').css('padding-top', '20px');
    }
  });
  $(document).on('click', function (event) {
      var clickover = $(event.target);
      var _opened = $(".navbar-collapse").hasClass("open");
      if (_opened === true && !clickover.hasClass("mt-1")) {
          $(".mt-1").click();
          $(".navbar-collapse").removeClass("open");
      }
  });

});
